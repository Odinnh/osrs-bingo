<template>
  <loginButton :destination="{ name: 'userOverview' }" />

  <h1>groupview</h1>
  <template
    v-if="
      boardData &&
      userStateStore.user.data.ui != 0 &&
      (userStateStore.user.data.uid == boardData.ownerID ||
        userStateStore.user.data.uid == ADMIN_ID ||
        boardData.editors.includes(userStateStore.user.data.uid))
    "
  >
    <ul v-if="GROUPS">
      <li v-for="group of GROUPS" :key="group.name">
        <ul>
          <li v-for="member of group.members" :key="member">{{ member }}</li>
        </ul>
      </li>
      <li><button class="btn">add group +</button></li>
    </ul>
  </template>
  <template v-else>Not Authenticated</template>
</template>
<script setup>
import { db } from '@/firebaseSettings'
import { collection, doc } from 'firebase/firestore'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'
import loginButton from '../components/loginButton.vue'

const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const boardStore = useBoardStore()
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')

const userStateStore = useUserStateStore()
const route = useRoute()
const boardUUID = ref(boardStore.boardUUID)
const GROUPS = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))
const boardData = useDocument(doc(db, 'Boards', boardUUID.value))
</script>
<style scoped></style>
