<template>
  <div>{{ router.params.boardUUID }}</div>
  <div v-if="boardData">{{ boardData.name }}</div>
  <div v-if="boardData">{{ boardData.orderOfList }}</div>
  <div v-if="orderOfList">{{ orderOfList }}</div>
  <div v-if="editBoard">
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
    <button @click="saveTiles()">save</button>
    <button v-if="list.length < 100" class="add tile" @click="AddTileToList()">Add a tile</button>
  </div>
  <button @click="editBoard = true" v-else>edit</button>

  <main ref="el" class="board" :style="{ '--width': widthInput + 'rem' }">
    <div
      class="tile"
      :class="{ 'to-be-deleted': tile.status == 'DELETEME', handle: editBoard }"
      v-for="tile in sortedList"
      :key="tile.id"
    >
      {{ tile.title }}
      <button v-if="editBoard" @click="showDialog(tile)">X</button>
    </div>
  </main>
  <dialog ref="dialog">
    <h2>do you want to delete me? {{ tileToBeDeleted?.title }}</h2>
    <button @click="RemoveTileFromList()">Yes</button>
    <button @click="cancelDelete()">No</button>
  </dialog>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable'
import type { Tile } from '@/types'
import { useCollection, useDocument } from 'vuefire'
import { db } from '@/firebaseSettings'
import { doc, collection, writeBatch, getDocs } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { tinyid } from '@/assets/js/tinyid'

const dialog = ref<HTMLDialogElement>()
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement>()
const widthInput = ref<number>(5)

const editBoard = ref<boolean>(false)
const tileToBeDeleted = ref<Tile | null>(null)
const router = useRoute()
const { data: boardData, promise: boardDataPromise } = useDocument(
  doc(db, 'Boards', router.params.boardUUID as string)
)
await boardDataPromise.value

let orderOfList = ref<string[]>([])

const { data: tilesData, promise: tilesDataPromise } = useCollection(
  collection(db, 'Boards', router.params.boardUUID as string, 'Tiles')
)
await tilesDataPromise.value
const list = ref<Tile[]>(tilesData.value as unknown as Tile[])
if (boardData.value?.orderOfList.value) {
  orderOfList.value = boardData.value.orderOfList.value
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
const AddTileToList = () => {
  const uuid = tinyid(4)
  list.value.push({
    id: uuid,
    title: uuid,
    description: '',
    image: '',
    type: 'drop',
    selector: 'OR',
    points: 0,
    count: 0
  })
  orderOfList.value.push(uuid)
}
const RemoveTileFromList = () => {
  if (!tileToBeDeleted.value) return
  list.value = list.value.filter((tile) => tile.id !== tileToBeDeleted.value!.id)
  orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
  dialog.value?.close()
}
const cancelDelete = () => {
  if (!tileToBeDeleted.value) return
  tileToBeDeleted.value = null
  dialog.value?.close()
}
const updateWidth = (type: string) => {
  //Width input can be at minimum be 3 and maximum be 12
  if (type === 'add') {
    widthInput.value = Math.min(widthInput.value + 1, 12)
  } else if (type === 'remove') {
    widthInput.value = Math.max(widthInput.value - 1, 3)
  }

  el.value?.style.setProperty('--width', widthInput.value.toString())
}
const saveTiles = async () => {
  editBoard.value = false

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
    await batch.commit()
  } catch (error) {
    console.error('Error synchronizing tiles:', error)
  }
}
</script>

<style scoped></style>
