import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const selectedTile = ref('')
  const boardUUID = ref('')

  function setSelectedTile(tile) {
    selectedTile.value = tile
  }
  function setBoardUUID(tile) {
    boardUUID.value = tile
  }

  return { selectedTile, setSelectedTile, boardUUID, setBoardUUID }
})
