<template>
  <!-- <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsCollected" /> -->
  <main v-if="props.boardData" class="bingo-board">
    <BoardTile
      v-for="tileData in props.tilesData"
      :key="'board-tile-' + tileData.id"
      :tileData="tileData"
      :groupsData="props.groupsData"
      :teamData="props.teamData"
      :selected="selectedTile == tileData.id"
      :isEditor="props.isEditor"
    />
  </main>
</template>

<script setup>
import BoardTile from '../components/BoardTile.vue'
import { useBoardStore } from '@/stores/board.js'
import { storeToRefs } from 'pinia'
const boardStore = useBoardStore()
const selectedTile = storeToRefs(boardStore.selectedTile)
const props = defineProps({
  boardData: {
    type: Object,
    required: true
  },
  groupsData: {
    type: Object,
    required: true
  },
  teamData: {
    type: Object,
    required: false,
    default: () => {
      return {
        name: 'all',
        collected: {}
      }
    }
  },
  tilesData: {
    type: Object,
    required: true,
    default: () => {}
  },
  isEditor: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped></style>
