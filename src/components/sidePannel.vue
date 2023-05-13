<template>
  <BoardTile
    :tileData="boardStore.selectedTile"
    :key="'side-pannel-tile-' + boardStore.selectedTile"
  />
  <h2>
    {{ boardStore.selectedTile.id.split('')[0] }}, {{ boardStore.selectedTile.id.split('')[1] }}
  </h2>
  <h1>{{ boardStore.selectedTile.title }}</h1>
  <p>{{ boardStore.selectedTile.description }}</p>
</template>

<script setup>
import { useBoardStore } from '@/stores/board.js'
const boardStore = useBoardStore()

import BoardTile from './BoardTile.vue'
</script>

<style scoped></style>
