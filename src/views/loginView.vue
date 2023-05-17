<template>
  <div class="block">
    <label for="email">email: <input type="email" name="email" id="email" v-model="email" /></label>
    <label for="pasword">
      password:
      <input type="password" name="password" id="password" v-model="password" />
    </label>
    <button class="btn" @click.prevent="loginUser">Log in</button>
    <button class="btn" @click.prevent="popupLogin">Log in with Google</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

// import { firebaseApp } from '@/firebaseSettings'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { useUserStateStore } from '../stores/userState'
import { useRouter } from 'vue-router'
const provider = new GoogleAuthProvider()
const userStateStore = useUserStateStore()
const email = ref('')
const password = ref('')
const auth = getAuth()
const router = useRouter()
const loginUser = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
      router.push({ name: 'boardOverview' })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}

const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      userStateStore.setUser({
        loggedIn: true,
        data: result.user
      })
      router.push({ name: 'boardOverview' })
      // ...
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
