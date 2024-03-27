<template>
  <div v-if="editBoard">
    <button @click="widthInputForm?.stepDown()">-</button>
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
          console.log(Math.min(widthInput, 12))
          widthInput = Math.max(widthInput, 3)
        }
      "
    />
    <button @click="widthInputForm?.stepUp()">+</button>
    <button @click="editBoard = false">save</button>
    <button v-if="list.length < 100" class="add tile" @click="AddTileToList(list)">
      Add a tile
    </button>
  </div>
  <button @click="editBoard = true" v-else>edit</button>

  <main ref="el">
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
import { ref, computed, nextTick } from 'vue'
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable'
import type { Tile } from '../types'

const dialog = ref<HTMLDialogElement>()
const el = ref<HTMLElement | null>(null)
const widthInputForm = ref<HTMLInputElement | null>(null)
const widthInput = ref<number>(5)
const list = ref<Tile[]>([])
const orderOfList = ref<string[]>([])
const editBoard = ref<boolean>(false)
const tileToBeDeleted = ref<Tile | null>(null)

for (let i = 0; i < 25; i++) {
  let uuid = uid(4)
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
  orderOfList.value[i] = uuid
}

const sortedList = computed<Tile[]>(() => {
  return list.value.toSorted(
    (a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})

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
</script>
<style scoped>
main {
  --width: v-bind('widthInput');
  display: grid;
  align-content: flex-start;
  grid-template-columns: repeat(var(--width), 1fr);
  gap: 20px;
  width: min-content;
  max-width: 80vw;
  padding: 20px;
  background-color: grey;
  & .tile {
    /* width: min-content; */
    aspect-ratio: 1;
    background-color: white;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: black;
    &.blue-background-class {
      background-color: #7e7d7d;
      color: white;
    }
    &.to-be-deleted {
      background-color: red;
    }
  }
}
.widthInput {
  width: 3ch;
  text-align: center;
}
input[type='number'] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
