<template>
  <section>
    <BingoBoard
      v-if="teamData && teamData.name == 'moderator'"
      :boardData="boardData"
      :groupsData="groupsData"
      :teamData="teamData"
      :tilesData="tilesData"
    />
    <aside>
      <p v-if="teamData">{{ teamData.name }}</p>
      <moderatorSidePannel
        :tileData="store.selectedTile"
        :key="store.selectedTile.id"
        :boardUUID="boardUUID"
        :groupsData="groupsData"
        :boardData="boardData"
      />
    </aside>
  </section>
</template>

<script setup>
//project modules
// import ModeratorBoard from '@/components/moderatorBoard.vue'
import moderatorSidePannel from '@/components/moderatorSidePannel.vue'
//vue modules
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/board'
//external modules
const store = useBoardStore()
import { useFirestore, useDocument } from 'vuefire'

import { doc, collection } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()
const teamCode = computed(() => route.params.teamCode)
const boardUUID = computed(() => route.params.boardUUID)
const db = useFirestore(firebaseApp)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID.value))
const { data: teamData } = useDocument(
  doc(db, `Boards/${boardUUID.value}/Groups/${teamCode.value}/`)
)
const groupsData = computed(() => {
  let tempObject = {}
  if (GROUPS) {
    GROUPS?.value?.forEach((group) => {
      if (group.name != 'moderator') {
        tempObject[group.id] = {
          id: group.id,
          name: group.name,
          member: group.members,
          icon: group.icon,
          color: group.color,
          points: group.points,
          flagEnd: group.flagEnd,
          collected: group.collected,
          verify: group.verify
        }
      }
    })
  }
  return tempObject || {}
})

const { data: tilesData } = useDocument(collection(db, `Boards/${boardUUID.value}/Tiles`))
</script>

<style scoped>
textarea {
  border: 1px solid var(--color-primary);
  background-color: #343434;
  color: var(--color-primary);
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
</style>
