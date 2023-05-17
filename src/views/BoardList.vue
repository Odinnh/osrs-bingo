<template>
  <template v-if="user.loggedIn">
    <h1>boardList:</h1>
    <ul>
      <li v-for="board in boards" :key="board" @click="toBoard(board.id)">{{ board.name }}</li>
      <router-link :to="{ name: 'newBoard' }" class="btn">+ create board</router-link>
    </ul>
  </template>
  <h1 v-if="!user.loggedIn">Not Authenticated</h1>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useFirestore, useDocument } from 'vuefire'
import { collection, query, where } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
import { useUserStateStore } from '../stores/userState'
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const userStateStore = useUserStateStore()
const user = userStateStore.user
const db = useFirestore(firebaseApp)
const boardsRef = collection(db, 'Boards')
const queryMethod = computed(() => {
  let tempMethod = '=='
  if (user.data.uid == ADMIN_ID.value) {
    tempMethod = '!='
  }
  return tempMethod
})
const queryID = computed(() => {
  let tempID = '=='
  if (user.data.uid == ADMIN_ID.value) {
    tempID = '0'
  } else {
    tempID = user.data.uid
  }
  return tempID
})
const boards = useDocument(query(boardsRef, where('ownerID', queryMethod.value, queryID.value)))

const router = useRouter()
const toBoard = (boardUUID) => {
  router.push({ name: 'overview', params: { boardUUID: boardUUID } })
}
</script>
<style scoped>
input {
  display: inline-block;
  padding: 0.5rem;
  background-color: #7b7b7b;
  border: none;
  border-top: 2px solid #0b0b0b;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  text-decoration: none;
  margin-right: 5px;
}
</style>
