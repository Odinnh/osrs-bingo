<template>
  <h1
    v-if="board && user.loggedIn && (board.ownerID == user.data.uid || user.data.uid == ADMIN_ID)"
  >
    {{ { id: board.id, ...board } }}
  </h1>
  <h1 v-if="!(board.ownerID == user.data.uid || user.data.uid == ADMIN_ID)">Not authenticated</h1>
</template>
<script setup>
import { ref } from 'vue'
import { useDocument, useFirestore } from 'vuefire'
import { doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
import { useUserStateStore } from '../stores/userState'
const userStateStore = useUserStateStore()
const user = userStateStore.user
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])
const db = useFirestore(firebaseApp)
const props = defineProps(['boardUUID'])
const board = useDocument(doc(db, 'Boards', props.boardUUID))
</script>
