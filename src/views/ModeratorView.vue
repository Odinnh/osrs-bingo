<template>
  <div class="container">
    <loginButton :destination="{ name: 'moderator', params: boardUUID }" />
    <section>
      <h1 v-if="boardData?.name != undefined">{{ boardData.name }}</h1>
    </section>
    <section
      v-if="
        user &&
        (user.uid == boardData?.ownerID ||
          userData?.type == 'admin' ||
          boardData?.moderators?.includes(user.uid) ||
          boardData?.editors?.includes(user.uid))
      "
    >
      <BingoBoard
        :boardData="boardData"
        :groupsData="groupsData"
        :tilesData="tilesData"
        :isModerator="true"
        :isEditor="boardData.editors?.includes(user.uid) ? true : false"
      />
      <aside>
        <moderatorSidePannel
          :tileData="boardStore.selectedTile"
          :key="boardStore.selectedTile.id"
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
import { getCurrentUser, useDocument } from 'vuefire'
import loginButton from '../components/loginButton.vue'
const boardStore = useBoardStore()
const user = await getCurrentUser()

const route = useRoute()
const boardUUID = computed(() => route.params.boardUUID)
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID.value, 'Groups'))

const { data: userData, promise: userDataPromise } = useDocument(doc(db, 'Users', `${user.uid}`))
await userDataPromise.value

const { data: boardData, promise: boardDataPromise } = useDocument(
  doc(db, 'Boards', boardUUID.value)
)
await boardDataPromise.value.then((boardData) => {
  if (!boardData.moderators) {
    boardData.moderators = []
  }
  if (!boardData.editors) {
    boardData.editors = []
  }
})
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

<style scoped></style>
