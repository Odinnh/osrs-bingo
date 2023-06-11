<template>
  <template
    v-if="
      userStateStore.user.loggedIn && userStateStore.user && userStateStore.user.data.uid != '0'
    "
  >
    <!-- {{ getFirstDoc('ZwSoQzIrYs5Y1L5M1VA9') }} -->
    <h1>User Settings and overview</h1>
    <section class="user-details">
      <h2>User details</h2>
      <p>
        Total boards: {{ userData?.count ? userData.count : 0 }}<br />
        User ID: <span class="highlight UID">{{ userStateStore.user.data.uid }}</span
        ><br />
        Share your user ID with people to have them add you as moderator and-or editor.
      </p>
    </section>
    <section>
      <h2>Your boards</h2>
      <div class="board-list">
        <div class="_item" v-for="board in boards" :key="board.id + board.name">
          <h3>{{ board.name }}</h3>

          <p>
            Board id: <span class="highlight UID">{{ board.id }}</span>
          </p>
          <p @click="toBoard('editBoard', board.id)">
            <iconButton class="iconBtn" :label="'Edit board: '" :fasIcon="'pen-to-square'" />
          </p>
          <p @click="toBoard('overview', board.id)">
            <iconButton class="iconBtn" :label="'Preview board: '" :fasIcon="'eye'" />
          </p>
          <p @click="toBoard('moderator', board.id)">
            <iconButton class="iconBtn" :label="'Verify tiles: '" :fasIcon="'square-check'" />
          </p>
          <p @click="toBoard('groupView', board.id)">
            <iconButton class="iconBtn" :label="'Manage groups: '" :fasIcon="'users-gear'" />
          </p>
          <p>
            Public:
            <input
              class="toggle"
              type="checkbox"
              v-bind:checked="board.settings.public"
              @click="togglePublic(board)"
            />
          </p>
        </div>
        <div class="_item">
          <h3>New Board</h3>
          <p>Create a new Bingo event</p>
          <button
            v-if="!userData || userData.count < 6"
            class="btn highlight new-board"
            @click.prevent="router.push({ name: 'newBoard' })"
          >
            Create new board
          </button>
        </div>
      </div>
    </section>
    <section v-if="!isEmpty(editBoards)" :key="editBoards">
      <h2>Boards you can edit</h2>
      <div class="board-list" v-if="editBoards">
        <div class="_item" v-for="board in editBoards" :key="board">
          <h3>{{ board.name }}</h3>
          <p @click="toBoard('editBoard', board.id)">
            <iconButton class="iconBtn" :label="'Edit board: '" :fasIcon="'pen-to-square'" />
          </p>
          <p @click="toBoard('overview', board.id)">
            <iconButton class="iconBtn" :label="'Preview board: '" :fasIcon="'eye'" />
          </p>
          <p @click="toBoard('moderator', board.id)">
            <iconButton class="iconBtn" :label="'Verify tiles: '" :fasIcon="'square-check'" />
          </p>
        </div>
      </div>
    </section>
    <section v-if="!isEmpty(modBoards)">
      <h2>Boards you can moderate</h2>
      <div class="board-list">
        <div class="_item" v-for="board in modBoards" :key="board">
          <h3>{{ board.name }}</h3>
          <p @click="toBoard('overview', board.id)">
            <iconButton class="iconBtn" :label="'Preview board: '" :fasIcon="'eye'" />
          </p>
          <p @click="toBoard('moderator', board.id)">
            <iconButton class="iconBtn" :label="'Verify tiles: '" :fasIcon="'square-check'" />
          </p>
        </div>
      </div>
    </section>
  </template>
  <h1 v-else>Not Authenticated</h1>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useDocument } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import { useUserStateStore } from '../stores/userState'
import iconButton from '../components/buttons/iconButton.vue'

const userStateStore = useUserStateStore()

const userData = useDocument(doc(db, 'Users', `${userStateStore.user.data.uid}`))
const boardsRef = collection(db, 'Boards')

const queryMethod = computed(() => {
  let tempMethod = '=='
  if (userData.value?.type == 'admin') {
    tempMethod = '!='
  }
  return tempMethod
})
const queryID = computed(() => {
  let tempID = userStateStore.user.data.uid
  if (userData.value?.type == 'admin') {
    tempID = '0'
  }
  return tempID
})
const boards = useDocument(query(boardsRef, where('ownerID', queryMethod.value, queryID.value)))
const modBoards = useDocument(
  query(boardsRef, where('moderators', 'array-contains', userStateStore.user.data.uid))
)
const editBoards = useDocument(
  query(boardsRef, where('editors', 'array-contains', userStateStore.user.data.uid))
)

const router = useRouter()
const toBoard = (route, boardUUID) => {
  router.push({ name: route, params: { boardUUID: boardUUID } })
}
const togglePublic = (board) => {
  let tempBoard = { ...board }
  tempBoard.settings.public = !board.settings.public
  updateDoc(doc(db, 'Boards', board.id), tempBoard)
}

if (!userStateStore.user.loggedIn) {
  router.push({ name: 'loginView' })
}
const isEmpty = (obj) => {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false
    }
  }

  return true
}
</script>
<style scoped>
section {
  padding: 15px;
  background-color: var(--color-tertiary);
  border-radius: var(--border-radius);
  margin-bottom: 15px;
}

.board-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}
.board-list ._item {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--border-radius);
  padding: 15px;
  background-color: var(--color-secondairy);
}
.board-list ._item > * {
  width: max-content;
}
.new-board {
  width: 100% !important;
  align-self: flex-end;
  margin-top: auto;
}
</style>
