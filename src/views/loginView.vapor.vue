<template>
  <div v-if="!user">
    <h1>Log in</h1>
    <p>you need to be signed in to edit, create and moderate a board</p>
    <button v-if="!user" class="btn" @click.prevent="popupLogin">Log in with Google</button>
  </div>
  <template v-else>
    <div>
      <h1>User details</h1>
      <button class="btn" @click.prevent="signOutFromApp">Log out</button>
    </div>
    <div>
      <h2>Boards</h2>
      <ul>
        <li v-for="board in userBoards">
          <label :key="board">
            {{ board }}
            <a
              icon
              class="btn"
              @click.prevent="router.push({ name: 'editBoard', params: { boardUUID: board } })"
              >edit</a
            >
          </label>
          <a
            icon
            class="btn"
            @click.prevent="router.push({ name: 'viewBoard', params: { boardUUID: board } })"
            >visibility</a
          >
        </li>
      </ul>
    </div>
  </template>
</template>
<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useFirebaseAuth, useCurrentUser, useDocument } from 'vuefire'
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'
import { doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

const router = useRouter()
const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()!
const user = useCurrentUser()
const userBoards = ref()

if (user.value) {
  const { data: userData, promise: userDataPromise } = useDocument(doc(db, 'Users', user.value.uid))
  await userDataPromise.value.then(() => {
    userBoards.value = userData.value?.boards
  })
}
const title = useTitle()
const dynamicTitle = (): string => {
  if (user.value) return 'User details'
  return 'log in'
}
title.value = dynamicTitle() + ' - Bingo Bongo'

const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      console.log(user)
      router.push({ name: 'Home' })
    })
    .catch((error) => {
      const errorMessage = error.message
      console.error(errorMessage)
    })
}
const signOutFromApp = () => {
  signOut(auth).then(() => router.push({ name: 'Home' }))
}
</script>
<style scoped></style>
