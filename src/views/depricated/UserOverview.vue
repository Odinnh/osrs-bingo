<template>
  <template v-if="user">
    <h1>User Settings and overview</h1>
    <section class="user-details">
      <h2>User details</h2>
      <p>
        Total boards: {{ userData?.count ? userData.count : 0 }}<br />
        User ID: <span class="highlight UID">{{ user.uid }}</span
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
import { ref } from 'vue'
import { getCurrentUser, useDocument } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import iconButton from '../components/buttons/iconButton.vue'

const user = await getCurrentUser()
if (!user) router.push({ name: 'loginView' })

const boardsRef = collection(db, 'Boards')
const queryID = ref(user.uid)
const queryMethod = ref('==')
const { data: userData, promise: userDataPromise } = useDocument(doc(db, 'Users', user.uid))
await userDataPromise.value
  .then(() => {
    if (userData.value.type == 'admin') queryMethod.value = '!='
    if (userData.value.type == 'admin') queryID.value = '0'
  })
  .catch((error) => {
    console.error(error.error)
  })

const boards = useDocument(query(boardsRef, where('ownerID', queryMethod.value, queryID.value)))
const modBoards = useDocument(query(boardsRef, where('moderators', 'array-contains', user.uid)))
const editBoards = useDocument(query(boardsRef, where('editors', 'array-contains', user.uid)))

const router = useRouter()
const toBoard = (route, boardUUID) => {
  router.push({ name: route, params: { boardUUID: boardUUID } })
}
const togglePublic = (board) => {
  let tempBoard = { ...board }
  tempBoard.settings.public = !board.settings.public
  updateDoc(doc(db, 'Boards', board.id), tempBoard)
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
