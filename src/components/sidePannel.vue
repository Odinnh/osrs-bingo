<template>
  <BoardTile :tileData="store.selectedTile" />
  <h2>{{ store.selectedTile.id.split('')[0] }}, {{ store.selectedTile.id.split('')[1] }}</h2>
  <h1>{{ store.selectedTile.title }}</h1>
  <p>{{ store.selectedTile.description }}</p>
  <button class="btn" v-if="teamData" @click.prevent="askforVerify()">Mark Collected</button>
</template>

<script setup>
import { useBoardStore } from '@/stores/board.js'
const store = useBoardStore()
import BoardTile from './BoardTile.vue'
import { useFirestore } from 'vuefire'

import { doc, updateDoc } from 'firebase/firestore'

import { firebaseApp } from '@/firebaseSettings'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  teamData: {
    type: Object
  },
  boardUUID: {
    type: String,
    required: true
  }
})
const db = useFirestore(firebaseApp)

const askforVerify = () => {
  if (props.teamData) {
    if (!props.teamData?.verify.includes(store.selectedTile.id)) {
      updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', props.teamData.id), {
        verify: [...props.teamData.verify, store.selectedTile.id]
      })
    }
  }
}
</script>

<style scoped></style>
