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
    <section>
      <h1>{{ boardData.name }}</h1>
    </section>
    <section
      v-if="
        userStateStore.user &&
        userStateStore.user.data.uid != 0 &&
        (userStateStore.user.data.uid == boardData.ownerID ||
          userStateStore.user.data.uid == ADMIN_ID ||
          boardData.moderators.includes(userStateStore.user.data.uid) ||
          boardData.editors.includes(userStateStore.user.data.uid))
      "
    >
      <BingoBoard :boardData="boardData" :groupsData="groupsData" :tilesData="tilesData" />
      <aside>
        <moderatorSidePannel
          :tileData="store.selectedTile"
          :key="store.selectedTile.id"
          :boardUUID="boardUUID"
          :groupsData="groupsData"
          :boardData="boardData"
        />
      </aside>
    </section>
    <section v-else>please log in or return to the [board]</section>
  </div>
</template>

<script setup>
import moderatorSidePannel from '@/components/moderatorSidePannel.vue'
import BingoBoard from '@/components/BingoBoard.vue'
import { db } from '@/firebaseSettings'
import { useBoardStore } from '@/stores/board'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { collection, doc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'
import { useUserStateStore } from '../stores/userState'

const store = useBoardStore()
const userStateStore = useUserStateStore()
const provider = new GoogleAuthProvider()
const auth = getAuth()
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])

const route = useRoute()
const router = useRouter()
const boardUUID = computed(() => route.params.boardUUID)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID.value))
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

const { data: tilesData } = useDocument(collection(db, `Boards/${boardUUID.value}/Tiles`))
const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
      router.push({ name: 'moderator', params: boardUUID })
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
  background-color: #343434;
  color: var(--color-primary);
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
</style>
