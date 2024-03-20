<template>
  <h2>
    {{ boardStore.selectedTile.title
    }}{{ boardStore.selectedTile.points != 0 ? `, ${boardStore.selectedTile.points} points` : '' }}
  </h2>
  <BoardTile
    class="board-tile"
    :tileData="boardStore.selectedTile"
    :key="'side-pannel-tile-' + boardStore.selectedTile"
  />
  <p v-if="boardStore.selectedTile.description">{{ boardStore.selectedTile.description }}</p>
  <!-- <p v-if="boardStore.selectedTile.score <=0">{{ boardStore.selectedTile.score }}</p> -->
  <p class="items" v-if="boardStore.selectedTile.items">
    Eligible items:
    <template v-for="(item, index) of boardStore.selectedTile.items">
      {{ item.item }}
      {{ item.count > 1 ? 'x' + item.count : '' }}
      {{ index !== boardStore.selectedTile.items.length - 1 ? ',' : '' }}
    </template>
  </p>
</template>

<script setup>
import { useBoardStore } from '@/stores/board.js'
const boardStore = useBoardStore()

import BoardTile from './BoardTile.vue'
</script>

<style scoped>
.board-tile {
  margin-bottom: 15px;
}
.items {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-style: italic;
}
</style>
