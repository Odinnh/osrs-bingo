<template>
  <h1>Log in</h1>
  <div class="block">
    <button class="btn" @click.prevent="popupLogin">Log in with Google</button>
    <button class="btn" @click.prevent="signOutFromApp">Log out</button>
  </div>
</template>
<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router'
const router = useRouter()
const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()!
const popupLogin = (destination) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      const credential = GoogleAuthProvider.credentialFromResult(result)!
      const token = credential.accessToken
      const user = result.user
      router.push({ name: 'Home' })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error(error, errorCode, errorMessage)
    })
}
const signOutFromApp = () => {
  signOut(auth).then(() => router.push({ name: 'Home' }))
}
</script>
<style scoped></style>
@/popupLogin
