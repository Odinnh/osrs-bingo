<template>
  <main ref="el">
    <div class="tile" v-for="tile in sortedList">
      {{ tile.title }}
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'

const el = ref<HTMLElement | null>(null)
const list = ref<object[]>([
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 }
])
const orderOfList = ref<number[]>([2, 1, 3, 4, 5])
const sortedList = computed<object[]>(() => {
  return list.value.toSorted(
    (a, b) => orderOfList.value.indexOf(a.id) - orderOfList.value.indexOf(b.id)
  )
})

list.value.sort()
useSortable(el, orderOfList)
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 500px;
  height: 500px;
  background-color: grey;
  & .tile {
    width: 80px;
    height: 80px;
    background-color: white;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: black;
  }
}
</style>
