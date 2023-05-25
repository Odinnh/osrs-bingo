<template>
  <button
    v-if="user && user.data.uid != 0"
    class="btn dashboard"
    @click.prevent="router.push({ name: 'boardOverview' })"
  >
    To Dashboard
  </button>
  <button v-else class="btn dashboard" @click.prevent="popupLogin">login</button>
  <h1>groupview</h1>
  <template
    v-if="
      boardData &&
      user.data.ui != 0 &&
      (user.data.uid == boardData.ownerID ||
        user.data.uid == ADMIN_ID ||
        boardData.editors.includes(user.data.uid))
    "
  >
    <ul v-if="GROUPS">
      <li v-for="group of GROUPS" :key="group.name">
        <ul>
          <li v-for="member of group.members" :key="member">{{ member }}</li>
        </ul>
      </li>
      <li><button class="btn">add group +</button></li>
    </ul>
  </template>
  <template v-else>Not Authenticated</template>
</template>
<script setup>
import { db } from '@/firebaseSettings'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { collection, doc } from 'firebase/firestore'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'

const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const boardStore = useBoardStore()
const provider = new GoogleAuthProvider()
const auth = getAuth()
const userStateStore = useUserStateStore()
const router = useRouter()
const route = useRoute()
const user = ref(userStateStore.user)
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')
const boardUUID = ref(boardStore.boardUUID)
const GROUPS = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID.value))
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
<style scoped></style>
