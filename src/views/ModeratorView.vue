<template>
  <div class="container">
    <loginButton :destination="{ name: 'moderator', params: boardUUID }" />
    <section>
      <h1 v-if="boardData?.name != undefined">{{ boardData.name }}</h1>
    </section>
    <section
      v-if="
        userStateStore.user &&
        userStateStore.user.data.uid != 0 &&
        (userStateStore.user.data.uid == boardData.ownerID ||
          userData?.type == 'admin' ||
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
import { collection, doc } from 'firebase/firestore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'
import { useUserStateStore } from '../stores/userState'
import loginButton from '../components/loginButton.vue'
const store = useBoardStore()
const userStateStore = useUserStateStore()

const route = useRoute()
const boardUUID = computed(() => route.params.boardUUID)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))
const userData = useDocument(doc(db, 'Users', `${userStateStore.user.data.uid}`))
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
