<template>
  <div class="container">
    <button
      v-if="userStateStore.user && userStateStore.user.data.uid != 0"
      class="btn dashboard"
      @click.prevent="router.push({ name: 'boardOverview' })"
    >
      To Dashboard
    </button>
    <button v-else class="btn dashboard" @click.prevent="popupLogin">login</button>
    <template
      v-if="
        boardData &&
        tilesData &&
        (boardData.settings.public ||
          user.data.uid == boardData.ownerID ||
          user.data.uid == ADMIN_ID)
      "
    >
      <section>
        <h1>{{ boardData.name }}</h1>
      </section>
      <section class="main-section">
        <template v-if="scoreOpen">
          <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsData" />
        </template>
        <button
          class="btn info"
          @click="
            () => {
              scoreOpen = !scoreOpen
            }
          "
        >
          i
        </button>
        <BingoBoard
          :boardData="boardData"
          :groupsData="groupsData"
          :tilesData="tilesData"
          :key="'bingo-board-' + boardStore.boardUUID"
        />
        <aside v-if="boardStore.selectedTile != ''">
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
          <sidePannel v-if="boardStore.selectedTile != ''" />
        </aside>
      </section>
      <section></section>
    </template>
    <template v-else>
      <h1>Not authenticated</h1>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import BingoBoard from '../components/BingoBoard.vue'
import scoreCard from '@/components/scoreCard.vue'
import sidePannel from '@/components/sidePannel.vue'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()
const auth = getAuth()
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])
const boardStore = useBoardStore()
// const selectedTile = boardStore.selectedTile
const userStateStore = useUserStateStore()
let user = ref(userStateStore.user)
const route = useRoute()
const router = useRouter()
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')
const boardUUID = boardStore.boardUUID
const scoreOpen = ref(false)

const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID, 'Groups'))
const boardData = useDocument(doc(db, 'Boards', boardUUID))
boardStore.setRules(boardData.value?.rules)
const groupsData = computed(() => {
  let tempObject = {}
  if (GROUPS) {
    GROUPS?.value?.forEach(async (group) => {
      tempObject[group.id] = { ...group }
    })
  }
  return tempObject || {}
})
const { data: tilesData } = useDocument(collection(db, `Boards/${boardUUID}/Tiles`))

const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
      router.push({ name: 'overview', params: { boardUUID: boardUUID } })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}
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
.info {
  color: #7f79ff;
  display: block;
  font-weight: bolder;
  font-size: 1.3rem;
  line-height: 0.2rem;
  height: 2.7rem;
  aspect-ratio: 1/1.2;
  text-align: center;
  padding-top: 3px;
}
</style>
