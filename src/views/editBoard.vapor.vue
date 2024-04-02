<template>
  <h1 v-if="boardData">
    {{ boardData.name }}
  </h1>
  <code>{{ router.params.boardUUID }}</code>
  <div v-if="isEditingBoard">
    <button @click="updateWidth('remove')">-</button>
    <input
      ref="widthInputForm"
      class="widthInput"
      v-model="widthInput"
      type="number"
      min="3"
      max="12"
      @blur="
        () => {
          widthInput = Math.min(widthInput, 12)
          widthInput = Math.max(widthInput, 3)
        }
      "
    />
    <button @click="updateWidth('add')">+</button>
    <button submit @click="saveTiles()">save</button>
    <button cancel @click="cancelEdit()">cancel</button>
    <button v-if="list.length < 100" class="add tile" @click="AddTileToList()">Add a tile</button>
  </div>
  <button @click="editBoard()" v-else>edit</button>

  <main ref="el" class="board" :style="{ '--width': widthInput + 'rem' }">
    <div
      class="tile"
      :class="{ 'to-be-deleted': tile.status == 'DELETEME', handle: isEditingBoard }"
      v-for="tile in sortedList"
      :key="tile.id"
    >
      <button v-if="isEditingBoard" @click="showDialog(tile)">Delete</button>
      {{ tile.title }}
    </div>
  </main>
  <dialog ref="dialog" class="danger">
    <h2>Are you sure?</h2>
    <p>do you want to delete {{ tileToBeDeleted?.title }}?</p>
    <p>once you press save, this is final and can't be undone</p>
    <button submit @click="RemoveTileFromList()">Yes</button>
    <button cancel @click="cancelDelete()">No</button>
  </dialog>
</template>

<script setup lang="ts">
// base imports
import { ref, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
// database imports
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable'
import { useCollection, useDocument } from 'vuefire'
import { doc, collection, writeBatch, getDocs } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
//misc imports
import { tinyid } from '@/assets/js/tinyid'
import { generateName } from '@/assets/js/tileNameGenerator'
// type imports
import type { Tile } from '@/types'

const dialog = ref<HTMLDialogElement>()
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement>()
const widthInput = ref<number>(5)

const isEditingBoard = ref<boolean>(false)
const tileToBeDeleted = ref<Tile | null>(null)
const router = useRoute()
const { data: boardData, promise: boardDataPromise } = useDocument(
  doc(db, 'Boards', router.params.boardUUID as string)
)
await boardDataPromise.value

let orderOfList = ref<string[]>([])
let localOrderOfList = <string[]>[]

const { data: tilesData, promise: tilesDataPromise } = useCollection(
  collection(db, 'Boards', router.params.boardUUID as string, 'Tiles')
)
await tilesDataPromise.value
const list = ref<Tile[]>(tilesData.value as unknown as Tile[])
if (boardData.value?.orderOfList) {
  orderOfList.value = boardData.value.orderOfList
} else {
  orderOfList.value = list.value.map((tile) => tile.id)
}

const sortedList = computed(() => {
  if (list.value === undefined) return []
  return list.value.toSorted(
    (a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})
// set list to the tiles imported from firebase database
useSortable(el, sortedList, {
  inverted: true,
  handle: '.handle',
  ghostClass: 'blue-background-class',
  onUpdate: (e: any) => {
    moveArrayElement(sortedList.value, e.oldIndex, e.newIndex)

    nextTick(() => {
      orderOfList.value = sortedList.value.map((tile) => tile.id)
    })
  }
})
const showDialog = (tile: Tile) => {
  tileToBeDeleted.value = tile
  tile.status = 'DELETEME'
  dialog.value?.showModal()
}
const AddTileToList = (): void => {
  const uuid = <string>tinyid()
  const name = <string>generateName()
  list.value.push({
    id: uuid,
    title: name,
    description: 'a sample description',
    image: 'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e',
    type: 'drop',
    selector: 'OR',
    points: 0,
    count: 0
  })
  orderOfList.value.push(uuid)
}
const RemoveTileFromList = (): void => {
  if (!tileToBeDeleted.value) return
  list.value = list.value.filter((tile) => tile.id !== tileToBeDeleted.value!.id)
  orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
  dialog.value?.close()
}
const cancelDelete = (): void => {
  if (!tileToBeDeleted.value) return
  tileToBeDeleted.value = null
  dialog.value?.close()
}
const updateWidth = (type: string): void => {
  //Width input can be at minimum be 3 and maximum be 12
  if (type === 'add') {
    widthInput.value = Math.min(widthInput.value + 1, 12)
  } else if (type === 'remove') {
    widthInput.value = Math.max(widthInput.value - 1, 3)
  }

  el.value?.style.setProperty('--width', widthInput.value.toString())
}
const saveTiles = async (): Promise<void> => {
  isEditingBoard.value = false

  try {
    const boardDocRef = doc(db, 'Boards', router.params.boardUUID as string)
    const tilesCollectionRef = collection(boardDocRef, 'Tiles')

    const batch = writeBatch(db)
    // update the order of the tiles
    batch.update(boardDocRef, {
      orderOfList: orderOfList.value
    })

    // Update the tiles in Firestore
    // Get the current tiles from Firestore
    const querySnapshot = await getDocs(tilesCollectionRef)
    const existingTiles: string[] = []
    querySnapshot.forEach((docSnapshot) => {
      const tileId = docSnapshot.id
      existingTiles.push(tileId)
      if (!list.value.find((tile) => tile.id === tileId)) {
        // If a tile exists in Firestore but not in the list, delete it
        const tileDocRef = doc(tilesCollectionRef, tileId)
        batch.delete(tileDocRef)
      }
    })

    // Add new tiles to Firestore
    list.value.forEach((tile) => {
      if (!existingTiles.includes(tile.id)) {
        const tileDocRef = doc(tilesCollectionRef, tile.id)
        batch.set(tileDocRef, {
          id: tile.id,
          title: tile.title,
          description: tile.description,
          image: tile.image,
          type: tile.type,
          selector: tile.selector,
          points: tile.points,
          count: tile.count
        })
      }
    })

    // Commit the batch
    await batch.commit().then(async () => {
      const { data: newTilesData, promise: newTilesDataPromise } = useCollection(
        collection(db, 'Boards', router.params.boardUUID as string, 'Tiles'),
        { once: true }
      )
      await newTilesDataPromise.value
      list.value = newTilesData.value as unknown as Tile[]
    })
  } catch (error) {
    console.error('Error synchronizing tiles:', error)
  }
}
const cancelEdit = () => {
  // canceling anything you did between saves
  isEditingBoard.value = false
  orderOfList.value = localOrderOfList
}

const editBoard = (): void => {
  // make a local version of the current order of the tiles
  localOrderOfList = orderOfList.value
  isEditingBoard.value = true
}
</script>

<style scoped></style>
