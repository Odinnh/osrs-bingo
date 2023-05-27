<template>
  <template
    v-if="
      userStateStore.user.loggedIn && userStateStore.user && userStateStore.user.data.uid != '0'
    "
  >
    <h2>User:</h2>
    Total boards: {{ userData?.count ? userData.count : 0 }}<br />
    user ID: <span class="UID">{{ userStateStore.user.data.uid }}</span
    ><br />
    share your user ID with people to have them add you as moderator / editor.
    <h2>your boards:</h2>
    <ul v-if="boards">
      <li v-for="board in boards" :key="board">
        <span>{{ board.name }}</span>
        <span class="iconSpan">
          <font-awesome-icon
            @click="toBoard('editBoard', board.id)"
            class="ico"
            :icon="['fas', 'pen-to-square']"
          />
          <font-awesome-icon
            @click="toBoard('overview', board.id)"
            class="ico"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            @click="toBoard('moderator', board.id)"
            class="ico"
            :icon="['fas', 'shield']"
          />
          <br />
          Public:
          <input
            class="toggle"
            type="checkbox"
            v-bind:checked="board.settings.public"
            @click.prevent="togglePublic(board)"
          />
        </span>
      </li>

      <router-link v-if="!userData || userData.count < 5" :to="{ name: 'newBoard' }" class="btn"
        >+ create board</router-link
      >
    </ul>
    <h2 v-if="editBoards">boards you can edit:</h2>
    <ul v-if="editBoards">
      <li v-for="board in editBoards" :key="board">
        <span>{{ board.name }}</span>
        <span class="iconSpan">
          <font-awesome-icon
            @click="toBoard('editBoard', board.id)"
            class="ico"
            :icon="['fas', 'pen-to-square']"
          />
          <font-awesome-icon
            @click="toBoard('overview', board.id)"
            class="ico"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            @click="toBoard('moderator', board.id)"
            class="ico"
            :icon="['fas', 'shield']"
          />
        </span>
      </li>
    </ul>
    <h2 v-if="modBoards">boards you can moderate:</h2>
    <ul v-if="modBoards">
      <li v-for="board in modBoards" :key="board">
        <span>{{ board.name }}</span>
        <span class="iconSpan">
          <font-awesome-icon
            @click="toBoard('overview', board.id)"
            class="ico"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            @click="toBoard('moderator', board.id)"
            class="ico"
            :icon="['fas', 'shield']"
          />
        </span>
      </li>
    </ul>
  </template>
  <h1 v-else>Not Authenticated</h1>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useDocument } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
import { useUserStateStore } from '../stores/userState'

const userStateStore = useUserStateStore()

const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const userData = useDocument(doc(db, 'Users', `${userStateStore.user.data.uid}`))
const boardsRef = collection(db, 'Boards')

const queryMethod = computed(() => {
  let tempMethod = '=='
  if (userStateStore.user.data.uid == ADMIN_ID.value) {
    tempMethod = '!='
  }
  return tempMethod
})
const queryID = computed(() => {
  let tempID = '=='
  if (userStateStore.user.data.uid == ADMIN_ID.value) {
    tempID = '0'
  } else {
    tempID = userStateStore.user.data.uid
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
</script>
<style scoped>
ul {
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: max-content;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  gap: 25px;
  justify-content: space-between;
}
.iconSpan {
  display: flex;
  gap: 10px;
}
.ico {
  cursor: pointer;
}
.UID {
  color: var(--color-accent);
}
</style>
