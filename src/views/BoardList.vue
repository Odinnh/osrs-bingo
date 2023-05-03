<template>
  <h1>boardList:</h1>
  <ul v-if="true">
    <li v-for="board in boards" :key="board" @click="toBoard(board.id)">{{ board.name }}</li>
  </ul>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'
import { collection } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)

const boards = useDocument(collection(db, 'Boards'))

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
