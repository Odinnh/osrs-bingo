import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCreateStore = defineStore('boardCreate', () => {
  const selectedTile = ref('')

  function setSelectedTile(tile) {
    selectedTile.value = tile
  }

  return { selectedTile, setSelectedTile }
})
