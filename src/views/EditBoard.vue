<template>
  <template
    v-if="user.data.ui != 0 && (user.data.uid == boardData.ownerID || user.data.uid == ADMIN_ID)"
  >
    <section>
      <h1 class="title-wrap" @click.prevent="selectEl()">
        <span
          class="board-title"
          ref="titleElement"
          contenteditable
          spellcheck="false"
          @keydown.enter="validate"
          @blur="validate"
          >{{ boardData.name }}</span
        >
        <span class="pen">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </h1>
    </section>
    <section class="main-section">
      <BingoBoard
        :boardData="boardData"
        :groupsData="groupsData"
        :tilesData="tilesData"
        :key="'bingo-board-' + boardStore.boardUUID"
        :isEditor="true"
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
        <editTile :tile="boardStore.selectedTile" />
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
import { useRoute } from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'
//external modules
import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
//project modules
import BingoBoard from '@/components/BingoBoard.vue'
import sidePannel from '@/components/sidePannel.vue'
import editTile from '../components/editTile.vue'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])
const boardStore = useBoardStore()
const userStateStore = useUserStateStore()
const user = userStateStore.user
const route = useRoute()
boardStore.setBoardUUID(route.params.boardUUID)
const boardUUID = boardStore.boardUUID

const db = useFirestore(firebaseApp)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID))
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

const titleElement = ref(null)
const selectEl = () => {
  titleElement.value.focus()
}
const validate = (event) => {
  event.target.blur()
  if (titleElement.value.innerText.trim() == '') {
    boardData.value.name = 'Enter title here'
    titleElement.value.innerText = 'Enter title here'
  } else {
    boardData.value.name = titleElement.value.innerText.trim()
  }
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

.title-wrap:focus-within .pen,
.title-wrap:focus .pen {
  display: none;
}
.title-wrap {
  width: max-content;
}
</style>
