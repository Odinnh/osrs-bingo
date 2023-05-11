<template>
  <section></section>
  <section class="main-section">
    <scoreCard
      v-if="groupsData"
      class="scoreCard"
      :groupsData="groupsData"
      :boardUUID="boardStore.boardUUID"
    />

    <BingoBoard
      v-if="boardData && tilesData"
      :boardData="boardData"
      :groupsData="groupsData"
      :teamData="teamData"
      :tilesData="tilesData"
      :key="'bingo-board-' + boardStore.boardUUID"
    />

    <aside v-if="boardData?.settings?.mode == 'teams' || openAside">
      <div style="justify-content: end; display: flex">
        <button
          class="btn close"
          v-if="openAside"
          @click="
            () => {
              openAside = !openAside
              tileSelected = ''
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
      <sidePannel
        v-if="boardStore.selectedTile != ''"
        :groupsData="groupsData"
        :teamData="teamData"
        :boardData="boardData"
        :boardUUID="boardUUID"
      />
    </aside>
  </section>
  <section></section>
</template>

<script setup>
// TODO: suspense mischien
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
import { useBoardStore } from '@/stores/board.js'

const boardStore = useBoardStore()
const route = useRoute()
const router = useRouter()
boardStore.setBoardUUID(route.params.boardUUID)
const teamCode = computed(() => route.params.teamCode || 'all')

const goToTeam = async () => {
  if (teamCode.value !== '') {
    let route = {
      name: 'private-board',
      params: { boardUUID: boardStore.boardUUID, teamCode: teamCode.value }
    }

    const { data: modCheck } = useDocument(
      doc(db, 'Boards', boardStore.boardUUID, 'Groups', teamCode.value)
    )
    if (modCheck && modCheck?.value?.name == 'moderator') {
      route.name = 'moderator'
    }
    router.push(route)
  }
}

const db = useFirestore(firebaseApp)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardStore.boardUUID, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardStore.boardUUID))
const { data: teamData } = useDocument(
  doc(db, `Boards/${boardStore.boardUUID}/Groups/${teamCode.value}/`)
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
const { data: tilesData } = useDocument(collection(db, `Boards/${boardStore.boardUUID}/Tiles`))
const tileSelected = ref('')
const openAside = ref(false)
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
