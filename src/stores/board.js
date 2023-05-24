import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const selectedTile = ref('')
  const boardUUID = ref('')
  const rules = ref('')
  function setSelectedTile(data) {
    selectedTile.value = data
  }
  function setBoardUUID(data) {
    boardUUID.value = data
  }
  function setRules(data) {
    rules.value = data
  }

  return { selectedTile, setSelectedTile, boardUUID, setBoardUUID, rules, setRules }
})
