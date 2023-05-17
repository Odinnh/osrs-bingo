import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStateStore = defineStore('userStateStore', () => {
  const user = ref({
    loggedIn: false,
    data: {
      uid: 0
    }
  })

  function setUser({ loggedIn, data }) {
    user.value = {
      loggedIn: loggedIn,
      data: data
    }
  }

  return { user, setUser }
})
