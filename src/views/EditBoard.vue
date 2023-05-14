<template>
  <h1 v-if="board">{{ { id: board.id, ...board } }}</h1>
</template>
<script setup>
import { useDocument, useFirestore } from 'vuefire'
import { doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)
const props = defineProps(['boardUUID'])
const board = useDocument(doc(db, 'Boards', props.boardUUID))
</script>
