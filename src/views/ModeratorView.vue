<template>
  <section>
    <ModeratorBoard v-if="(groupData && groupData.name =='moderator')" :boardUUID="boardUUID" :teamCode="teamCode"/>
  </section>
</template>

<script setup>
//vue modules
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useFirestore, useDocument } from 'vuefire'

import { doc, updateDoc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)
//external modules

//project modules
import ModeratorBoard from '../components/moderatorBoard.vue'

const route = useRoute()
const notesValue = ref('')
const teamCode = computed(() => route.params.teamCode)
const boardUUID = computed(() => route.params.boardUUID)
const { data: groupData } = useDocument(doc(db, `Boards/${boardUUID.value}/Groups/${teamCode.value}/`))
</script>

<style scoped>
textarea {
  border: 1px solid white;
  background-color: #343434;
  color: white;
  font-size: 1.1rem;
  padding: 15px;

}

.heading h2 {
  display: inline;
  margin-right: 15px;
}</style>