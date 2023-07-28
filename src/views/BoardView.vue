<template>
  <div class="container">
    <loginButton :destination="{ name: 'overview', params: { boardUUID: boardUUID } }" />
    <template
      v-if="
        boardData &&
        tilesData &&
        (boardData.settings.public || user?.uid == boardData.ownerID || userData?.type == 'admin')
      "
    >
      <section>
        <h1>{{ boardData.name }}</h1>
      </section>
      <section class="main-section">
        <template v-if="scoreOpen == scoreOpen">
          <scoreCard v-if="groupsData" class="score-card" :groupsData="groupsData" />
        </template>
        <BingoBoard
          class="bingo-board"
          :boardData="boardData"
          :groupsData="groupsData"
          :tilesData="tilesData"
          :key="'bingo-board-' + boardStore.boardUUID"
        />
        <aside class="detail-pane" v-if="boardStore.selectedTile != ''">
          <div style="justify-content: end; display: flex">
            <iconButton
              @click="
                () => {
                  boardStore.setSelectedTile('')
                }
              "
              class="iconBtn btn close"
              :fasIcon="'xmark'"
            />
          </div>
          <sidePannel v-if="boardStore.selectedTile != ''" />
        </aside>
      </section>
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
import { getCurrentUser, useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import BingoBoard from '../components/BingoBoard.vue'
import scoreCard from '../components/scoreCard.vue'
import sidePannel from '../components/sidePannel.vue'
import { useBoardStore } from '../stores/board.js'

import iconButton from '../components/buttons/iconButton.vue'
import loginButton from '../components/loginButton.vue'

const boardStore = useBoardStore()
// const selectedTile = boardStore.selectedTile
let userData
const user = await getCurrentUser()

if (user) {
  userData = useDocument(doc(db, 'Users', user.uid))
}

const route = useRoute()
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
</script>

<style scoped>
.main-section {
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.4fr;
  gap: calc(3 * var(--border-radius));
}
.detail-pane {
  background-color: var(--color-tertiary);
  padding: 15px;
  border-radius: var(--border-radius);
  height: max-content;
  position: sticky;
  top: 15px;
}
@media screen and (max-width: 900px) {
  .main-section {
    grid-template-columns: 0.4fr 0.6fr;
    grid-template-areas: 'board board' 'score detail';
  }
  .bingo-board {
    grid-area: board;
  }
  .score-card {
    grid-area: score;
  }
  .detail-pane {
    grid-area: detail;
  }
}
</style>
