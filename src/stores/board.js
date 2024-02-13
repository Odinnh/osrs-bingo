import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const selectedTile = ref('')
  const boardUUID = ref('')
  const rules = ref('')
  const inputting = ref(false)
  const isBlackout = ref(false)

  function setSelectedTile(data) {
    selectedTile.value = data
  }
  function setBoardUUID(data) {
    boardUUID.value = data
  }
  const setBlackout = (data) => {
    isBlackout.value = data
  }
  function setRules(data) {
    rules.value = data
  }

  return {
    setBlackout,
    isBlackout,
    selectedTile,
    setSelectedTile,
    boardUUID,
    setBoardUUID,
    rules,
    setRules,
    inputting
  }
})
