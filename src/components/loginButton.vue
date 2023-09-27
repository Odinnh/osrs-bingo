<template>
  <div class="dashboard">
    <template v-if="!user">
      <iconButton
        class="iconBtn"
        @click="popupLogin(props.destination, router)"
        :fasIcon="'right-to-bracket'"
      />
    </template>

    <template v-else>
      <iconButton
        class="iconBtn"
        :label="'Dashboard'"
        @click="toBoard('userOverview')"
        :fasIcon="'list-ul'"
      />

      <template
        v-if="
          boardData &&
          userStateStore.user &&
          user &&
          (user.uid == boardData?.ownerID ||
            userData?.type == 'admin' ||
            boardData?.editors?.includes(user.uid))
        "
      >
        <iconButton
          :class="{ 'current-page': route.name == 'editBoard' }"
          class="iconBtn"
          :label="'Edit board'"
          @click="toBoard('editBoard', boardID)"
          :fasIcon="'pen-to-square'"
        />
      </template>

      <template v-if="true">
        <iconButton
          class="iconBtn"
          :label="'Preview board'"
          :class="{ 'current-page': route.name == 'overview' }"
          @click="toBoard('overview', boardID)"
          :fasIcon="'eye'"
        />
      </template>

      <template
        v-if="
          boardData &&
          userStateStore.user &&
          user &&
          (user.uid == boardData?.ownerID ||
            userData?.type == 'admin' ||
            boardData?.moderators?.includes(user.uid) ||
            boardData?.editors?.includes(user.uid))
        "
      >
        <iconButton
          :class="{ 'current-page': route.name == 'moderator' }"
          class="iconBtn"
          :label="'Verify tiles'"
          @click="toBoard('moderator', boardID)"
          :fasIcon="'square-check'"
        />
      </template>

      <template
        v-if="user && user && (user.uid == boardData?.ownerID || userData?.type == 'admin')"
      >
        <iconButton
          :class="{ 'current-page': route.name == 'groupView' }"
          class="iconBtn"
          :label="'Magage groups'"
          @click="toBoard('groupView', boardID)"
          :fasIcon="'users-gear'"
        />
        <iconButton
          class="iconBtn"
          @click="signOutFromApp(router)"
          :fasIcon="'right-from-bracket'"
          :label="'Log out'"
        />
      </template>
    </template>
  </div>
</template>

<script setup>
import { useUserStateStore } from '../stores/userState'
import { useRoute, useRouter } from 'vue-router'
import { popupLogin, signOutFromApp } from '../views/popupLogin'
import iconButton from './buttons/iconButton.vue'
import { getCurrentUser, useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
// import { c}
const props = defineProps({
  destination: {
    type: Object,
    required: true
  }
})
const route = useRoute()
const boardID = route.params.boardUUID
const userStateStore = useUserStateStore()

let userData
const user = await getCurrentUser()

if (user) {
  userData = useDocument(doc(db, 'Users', user.uid))
}
const router = useRouter()

const boardData = useDocument(doc(db, 'Boards', route.params.boardUUID))

const toBoard = (route, boardUUID) => {
  if (boardUUID) {
    router.push({ name: route, params: { boardUUID: boardUUID } })
  } else {
    router.push({ name: route })
  }
}
</script>
<style scoped>
.dashboard {
  position: sticky;
  top: 0;
  z-index: 1000000;
}
</style>
