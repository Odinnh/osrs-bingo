<template>
  <h1>createNewBoard</h1>
  <main class="bingo-board">
    <template v-for="index of width * height" :key="index">
      <emptyTile :tileID="index" :width="width" :height="height" />
    </template>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import emptyTile from '../components/emptyTile.vue'
const width = ref(1)
const height = ref(1)
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
  user-select: none;
}
.scoreCard {
  padding: 10px;
}
</style>
