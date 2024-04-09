<template>
  <h1>{{ dynamicTitle() }}</h1>
  <div class="block">
    <div v-if="user">Hello: {{ user.displayName }}</div>
    <button v-else class="btn" @click.prevent="popupLogin">Log in with Google</button>
    <button v-if="user" class="btn" @click.prevent="signOutFromApp">Log out</button>
  </div>
</template>
<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'

const router = useRouter()
const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()!
const user = useCurrentUser()

const title = useTitle()
const dynamicTitle = (): string => {
  if (user) return 'User Pannel'
  return 'log in'
}
title.value = dynamicTitle() + ' - Bingo Bongo'

const popupLogin = (destination) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(user)
      const credential = GoogleAuthProvider.credentialFromResult(result)!
      const token = credential.accessToken
      router.push({ name: 'Home' })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
    })
}
const signOutFromApp = () => {
  signOut(auth).then(() => router.push({ name: 'Home' }))
}
</script>
<style scoped></style>
@/popupLogin
