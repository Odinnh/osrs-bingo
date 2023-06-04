<template>
  <div class="container">
    <loginButton :destination="{ name: 'overview', params: { boardUUID: boardUUID } }" />
    <template
      v-if="
        boardData &&
        tilesData &&
        (boardData.settings.public ||
          userStateStore.user.data.uid == boardData.ownerID ||
          userData?.type == 'admin')
      "
    >
      <section>
        <h1>{{ boardData.name }}</h1>
      </section>
      <section class="main-section">
        <template v-if="scoreOpen == scoreOpen">
          <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsData" />
        </template>
        <!-- <button
          class="btn info"
          @click="
            () => {
              scoreOpen = !scoreOpen
            }
          "
        >
          i
        </button> -->
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
      <p>you do not need to log in to view a published board.</p>
      <p>
        if the board you are looking for is private, you need to be the owner, a moderator, or
        editor to view this board.
      </p>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import BingoBoard from '../components/BingoBoard.vue'
import scoreCard from '../components/scoreCard.vue'
import sidePannel from '../components/sidePannel.vue'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'

import loginButton from '../components/loginButton.vue'

const boardStore = useBoardStore()
// const selectedTile = boardStore.selectedTile
const userStateStore = useUserStateStore()
const route = useRoute()
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')
const boardUUID = boardStore.boardUUID
const scoreOpen = ref(false)
const userData = useDocument(doc(db, 'Users', `${userStateStore.user.data.uid}`))
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
</script>

<style scoped></style>
