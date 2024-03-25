<template>
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
    <button v-if="list.length < 25" class="add tile" @click="AddTileToList(list)">+</button>
  </main>
  <dialog ref="dialog">
    <h2>do you want to delete me?</h2>
    <button @click="RemoveTileFromList(list, tile)">Yes</button>
    <button
      @click="
        (tile, dialog) => {
          tile.status = null
          dialog.close()
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
interface Tile {
  id: string
  title: string
  status?: string | 'DELETEME' | null
}
const dialog = ref<HTMLDialogElement | null>(null)
const el = ref<HTMLElement | null>(null)
const list = ref<Tile[]>([])
const orderOfList = ref<string[]>([])

const tileToBeDeleted = ref<Tile | null>(null)

for (let i = 0; i < 25; i++) {
  let uuid = uid(4)
  list.value[i] = <Tile>{ id: uuid, title: uuid }
  orderOfList.value[i] = uuid
}

const sortedList = computed<Tile[]>(() => {
  return list.value.toSorted(
    (a: Tile, b: Tile) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})

list.value.sort()
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
  list.push({ id: uuid, title: uuid })
  orderOfList.value.push(uuid)
}
const RemoveTileFromList = (list: Tile[], tile: Tile) => {
  list.splice(
    list.findIndex((_tile: Tile) => _tile.id === tile.id),
    1
  )
  orderOfList.value = sortedList.value.map((_tile: Tile) => _tile.id)
  dialog.value?.close()
}
</script>
<style scoped>
main {
  display: grid;
  align-content: flex-start;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 500px;
  padding: 20px;
  background-color: grey;
  & .tile {
    width: 80px;
    height: 80px;
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
</style>
