<template>
  <section>
    <BingoBoard :boardUUID="boardUUID" :teamCode="teamCode" />
  </section>
  <div v-if="groupData" class="heading">
    <h2>Notes</h2>
    <button class="btn" @click="saveNotes" :disabled="notesValue == groupData.notes">
      Save notes
    </button>
  </div>
  <textarea
    v-if="groupData"
    name="teamNotes"
    id="teamNotes"
    rows="10"
    v-model="groupData.notes"
    @submit.prevent
  ></textarea>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useFirestore, useDocument } from 'vuefire'

import { doc, updateDoc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)
//external modules

//project modules
import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()
const notesValue = ref('')
const teamCode = computed(() => route.params.teamCode)
const boardUUID = computed(() => route.params.boardUUID)
const { data: groupData } = useDocument(
  doc(db, `Boards/${boardUUID.value}/Groups/${teamCode.value}/`)
)

const saveNotes = async () => {
  notesValue.value = groupData.value.notes
  await updateDoc(doc(db, `Boards/${boardUUID.value}/Groups/${teamCode.value}/`), {
    notes: notesValue.value
  })
}
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
}
</style>
