import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const selectedTile = ref('')

  function setSelectedTile(tile) {
    selectedTile.value = tile
  }

  return { selectedTile, setSelectedTile }
})
