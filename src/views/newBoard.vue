<template>
  <h1>createNewBoard</h1>
  <div>
    width: <input min="0" max="15" name="width" type="range" :value="width" /> height:
    <input min="0" max="15" name="height" type="range" :value="height" />
  </div>
  <main v-if="tiles" class="bingo-board">
    <template v-for="tile of tiles" :key="tile.coordinates">
      <emptyTile :tile="tile" :width="width" :height="height" />
    </template>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import emptyTile from '../components/emptyTile.vue'
const width = ref(1)
const height = ref(6)
const tiles = computed(() => {
  let tempObject = {}
  for (let i = 1; i <= width.value * height.value - 1; i++) {
    if (width.value * height.value >= 100) {
      prefix = 0
    }
    let coords = (((i - 1) % width.value) + 1) * 10 + Math.floor((i - 1) / width.value) + 1
    tempObject[coords] = { coordinates: coords }
    console.log(tempObject)
  }
  return tempObject
})
</script>

<style scoped>
.bingo-board {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  width: min(70vh, 70vw);
  background-color: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(v-bind('width'), 1fr);
  grid-template-rows: repeat(v-bind('height'), 1fr);
  gap: 5px;
  padding: 20px;
}
</style>
