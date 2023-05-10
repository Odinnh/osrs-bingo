<template>
  <BoardTile :tileData="store.selectedTile" />
  <h2>{{ store.selectedTile.id.split('')[0] }}, {{ store.selectedTile.id.split('')[1] }}</h2>
  <h1>{{ store.selectedTile.title }}</h1>
  <p>{{ store.selectedTile.description }}</p>
</template>

<script setup>
import { useBoardStore } from '@/stores/board.js'
const store = useBoardStore()
import BoardTile from './BoardTile.vue'
</script>

<style scoped></style>
