<template>
  <main ref="el">
    <div class="tile" v-for="tile in sortedList" :key="tile.id">
      {{ tile.title }}
      <button @click="RemoveTileFromList(list, tile.id)">X</button>
    </div>
    <button v-if="list.length < 25" class="add tile" @click="AddTileToList(list)">+</button>
  </main>
</template>
<script setup lang="ts">
import { uid } from 'uid'
import { ref, computed, nextTick } from 'vue'
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable'
interface Tile {
  id: string
  title: string
}
const el = ref<HTMLElement | null>(null)
const list = ref<Tile[]>([])
const orderOfList = ref<string[]>([])
for (let i = 0; i < 25; i++) {
  let uuid = uid(4)
  list.value[i] = <Tile>{ id: uuid, title: uuid }
  orderOfList.value[i] = uuid
}

const sortedList = computed<Tile[]>(() => {
  return list.value.toSorted(
    (a, b) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
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
const AddTileToList = (list: Tile[]) => {
  const uuid = uid(4)
  list.push({ id: uuid, title: uuid })
  orderOfList.value.push(uuid)
}
const RemoveTileFromList = (list: Tile[], id: string) => {
  list.splice(
    list.findIndex((tile) => tile.id === id),
    1
  )
  orderOfList.value = sortedList.value.map((tile) => tile.id)
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
  }
}
</style>
