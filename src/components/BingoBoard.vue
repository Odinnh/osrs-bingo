<template>
  <!-- <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsCollected" /> -->
  <main v-if="props.boardData" class="bingo-board">
    <BoardTile
      v-for="tileData in props.tilesData"
      :key="'board-tile-' + tileData.coordinates"
      :tileData="tileData"
      :groupsData="props.groupsData"
      :teamData="props.teamData"
      :selected="selectedTile == tileData.id"
      :isEditor="props.isEditor"
      :isModerator="props.isModerator"
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

<style scoped>
main {
  background-color: var(--color-tertiary);
  padding: 15px;
  width: 100%;
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(v-bind('boardData.settings.width'), 1fr);
  /* grid-template-rows: repeat(v-bind('boardData.settings.height'), 1fr); */
  gap: min(2vw, calc(var(--border-radius) * 3));
  height: min-content;
}
</style>
