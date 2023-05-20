<template>
  <h1>Log in</h1>
  <div class="block">
    <button class="btn" @click.prevent="popupLogin">Log in with Google</button>
  </div>
</template>
<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUserStateStore } from '../stores/userState'
import { useRouter } from 'vue-router'

const provider = new GoogleAuthProvider()
const userStateStore = useUserStateStore()
const auth = getAuth()
const router = useRouter()

const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
      router.push({ name: 'boardOverview' })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}
</script>
<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 20px;
  margin: 0 auto;
}
.block input {
  width: 200px;
}

.btn {
  width: 200px;
}
</style>
