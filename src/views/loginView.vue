<template>
  <input type="email" name="email" id="email" v-model="email" />
  <input type="password" name="password" id="password" v-model="password" />
  {{ email }} <br />
  {{ password }}
  {{ userStateStore }}
  <button class="btn" @click.prevent="loginUser">Log in</button>
  <button class="btn" @click.prevent="popupLogin">Log in with Google</button>
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
const provider = new GoogleAuthProvider()
const userStateStore = useUserStateStore()
const email = ref('')
const password = ref('')
const auth = getAuth()
const loginUser = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
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
