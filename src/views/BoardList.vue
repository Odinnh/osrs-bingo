<template>
  <template v-if="user.loggedIn">
    <h1>boardList:</h1>
    <ul>
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
        </span>
      </li>
      <router-link v-if="userData?.count < 5" :to="{ name: 'newBoard' }" class="btn"
        >+ create board</router-link
      >
      {{}}
    </ul>
  </template>
  <h1 v-if="!user.loggedIn">Not Authenticated</h1>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useFirestore, useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'
import { useUserStateStore } from '../stores/userState'

const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const userStateStore = useUserStateStore()
const user = userStateStore.user
const db = useFirestore(firebaseApp)

const { data: userData } = useDocument(doc(db, 'Users', user.data.uid))
const boardsRef = collection(db, 'Boards')

const queryMethod = computed(() => {
  let tempMethod = '=='
  if (user.data.uid == ADMIN_ID.value) {
    tempMethod = '!='
  }
  return tempMethod
})
const queryID = computed(() => {
  let tempID = '=='
  if (user.data.uid == ADMIN_ID.value) {
    tempID = '0'
  } else {
    tempID = user.data.uid
  }
  return tempID
})
const boards = useDocument(query(boardsRef, where('ownerID', queryMethod.value, queryID.value)))

const router = useRouter()
const toBoard = (route, boardUUID) => {
  router.push({ name: route, params: { boardUUID: boardUUID } })
}
</script>
<style scoped>
input {
  display: inline-block;
  padding: 0.5rem;
  background-color: #7b7b7b;
  border: none;
  border-top: 2px solid #0b0b0b;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  text-decoration: none;
  margin-right: 5px;
}
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
</style>
