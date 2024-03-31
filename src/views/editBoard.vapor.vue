<template>
  <div>{{ router.params.boardUUID }}</div>
  <div v-if="board">{{ board.name }}</div>
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
    <button @click="editBoard = false">save</button>
    <button v-if="list.length < 100" class="add tile" @click="AddTileToList(list)">
      Add a tile
    </button>
  </div>
  <button @click="editBoard = true" v-else>edit</button>

  <main ref="el" class="board" :style="{ '--width': widthInput + 'rem' }">
    <div
      class="tile"
      :class="{ 'to-be-deleted': tile.status == 'DELETEME' }"
      v-for="tile in sortedList"
      :key="tile.id"
    >
      {{ tile.title }}
      <button @click="showDialog(tile)">X</button>
    </div>
  </main>
  <dialog ref="dialog">
    <h2>do you want to delete me? {{ tileToBeDeleted?.title }}</h2>
    <button @click="RemoveTileFromList(list)">Yes</button>
    <button
      @click="
        () => {
          if (!tileToBeDeleted) return
          tileToBeDeleted.status = null
          
            list.some((el:Tile, index:number, arr:Tile[]) => {
             if (el.id === tileToBeDeleted?.id) { el.status = null
              arr[index].status = null}
            },)
          tileToBeDeleted = null
          dialog?.close()
        }
      "
    >
      No
    </button>
  </dialog>
</template>
<script setup lang="ts">
import { uid } from 'uid'
import { ref, computed, nextTick, onMounted } from 'vue'
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable'
import type { Tile } from '@/types'
import { useDocument } from 'vuefire'
import { db } from '@/firebaseSettings'
import { DocumentData, doc } from '@firebase/firestore'
import { useRoute } from 'vue-router'

const dialog = ref<HTMLDialogElement>()
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement>()
const widthInput = ref<number>(5)
const list = ref<Tile[]>([])
const orderOfList = ref<string[]>([])
const editBoard = ref<boolean>(false)
const tileToBeDeleted = ref<Tile | null>(null)
const router = useRoute()
const { board, boardPromise } = useDocument(doc(db, '/Boards/', router.params.boardUUID as string))
await boardPromise.value
const sortedList = computed<Tile[]>(() => {
  return list.value.toSorted(
    (a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})
// set list to the tilesimported from firebase database
onMounted(() => {})
useSortable(el, sortedList, {
  inverted: true,
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
const AddTileToList = (list: Tile[]) => {
  const uuid = uid(4)
  list.push({
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
const RemoveTileFromList = (list: Tile[]) => {
  list.splice(
    list.findIndex((_tile: Tile) => _tile.id === tileToBeDeleted.value?.id),
    1
  )
  orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
  dialog.value?.close()
}
const updateWidth = (type: string) => {
  //Width input can be at minimun be 3 and maximum be 12
  if (type === 'add') {
    widthInput.value = Math.min(widthInput.value + 1, 12)
  } else if (type === 'remove') {
    widthInput.value = Math.max(widthInput.value - 1, 3)
  }

  el.value?.style.setProperty('--width', widthInput.value.toString())
}
</script>
<style scoped></style>
