<template>
  <template
    v-if="
      boardData &&
      tilesData &&
      (boardData.settings.public || user.data.uid == boardData.ownerID || user.data.uid == ADMIN_ID)
    "
  >
    <section>{{ boardData.name }}</section>
    <section class="main-section">
      <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsData" />
      <BingoBoard
        :boardData="boardData"
        :groupsData="groupsData"
        :teamData="teamData"
        :tilesData="tilesData"
        :key="'bingo-board-' + boardStore.boardUUID"
      />
      <aside v-if="selectedTile != ''">
        <div style="justify-content: end; display: flex">
          <button
            class="btn close"
            @click="
              () => {
                boardStore.setSelectedTile('')
              }
            "
          >
            ╳
          </button>
        </div>
        <template v-if="boardData?.settings?.mode == 'teams'">
          <p v-if="teamData">
            <fontAwesomeIcon class="icon" :icon="['fas', teamData.icon]" /> {{ teamData.name }}
          </p>
          <form v-if="!teamData" @submit.prevent="goToTeam">
            team code: <input type="text" name="teamId" v-model="teamCode" />
          </form>
        </template>
        <sidePannel v-if="boardStore.selectedTile != ''" />
      </aside>
    </section>
    <section></section>
  </template>
  <template v-else>
    <h1>Not authenticated</h1>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'
//external modules
import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
//project modules
import BingoBoard from '@/components/BingoBoard.vue'
import scoreCard from '@/components/scoreCard.vue'
import sidePannel from '@/components/sidePannel.vue'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])
const boardStore = useBoardStore()
const selectedTile = boardStore.selectedTile
const userStateStore = useUserStateStore()
const user = userStateStore.user
const route = useRoute()
const router = useRouter()
boardStore.setBoardUUID(route.params.boardUUID)
const boardUUID = boardStore.boardUUID
const teamCode = ref(route.params.teamCode || 'all')

const goToTeam = async () => {
  if (teamCode.value !== '') {
    let route = {
      name: 'private-board',
      params: { boardUUID: boardUUID, teamCode: teamCode.value }
    }

    const { data: modCheck } = useDocument(doc(db, 'Boards', boardUUID, 'Groups', teamCode.value))
    if (modCheck && modCheck?.value?.name == 'moderator') {
      route.name = 'moderator'
    }
    router.push(route)
  }
}

const db = useFirestore(firebaseApp)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID))
const { data: teamData } = useDocument(doc(db, `Boards/${boardUUID}/Groups/${teamCode.value}/`))
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
const { data: tilesData } = useDocument(collection(db, `Boards/${boardUUID}/Tiles`))
</script>

<style scoped>
textarea {
  border: 1px solid var(--color-primary);
  background-color: var(--background-color);
  color: var(--color-primary);
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
.main-section {
  display: flex;
  justify-content: center;
}
aside {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 300px;
}
</style>
