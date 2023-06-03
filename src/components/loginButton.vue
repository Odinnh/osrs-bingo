<template>
  <div class="dashboard">
    <template v-if="userStateStore.user && userStateStore.user.data.uid != 0">
      <iconButton class="iconBtn" @click="toBoard('userOverview')" :fasIcon="'list-ul'" />

      <template
        v-if="
          userStateStore.user &&
          userStateStore.user.data.uid != 0 &&
          (userStateStore.user.data.uid == boardData.ownerID ||
            userData?.type == 'admin' ||
            boardData?.editors?.includes(userStateStore.user.data.uid))
        "
      >
        <iconButton
          :class="{ 'current-page': route.name == 'editBoard' }"
          class="iconBtn"
          @click="toBoard('editBoard', boardID)"
          :fasIcon="'pen-to-square'"
        />
      </template>

      <template v-if="true">
        <iconButton
          class="iconBtn"
          :class="{ 'current-page': route.name == 'overview' }"
          @click="toBoard('overview', boardID)"
          :fasIcon="'eye'"
        />
      </template>

      <template
        v-if="
          userStateStore.user &&
          userStateStore.user.data.uid != 0 &&
          (userStateStore.user.data.uid == boardData.ownerID ||
            userData?.type == 'admin' ||
            boardData?.moderators?.includes(userStateStore.user.data.uid) ||
            boardData?.editors?.includes(userStateStore.user.data.uid))
        "
      >
        <iconButton
          :class="{ 'current-page': route.name == 'moderator' }"
          class="iconBtn"
          @click="toBoard('moderator', boardID)"
          :fasIcon="'square-check'"
        />
      </template>

      <template
        v-if="
          userStateStore.user &&
          userStateStore.user.data.uid != 0 &&
          (userStateStore.user.data.uid == boardData.ownerID || userData?.type == 'admin')
        "
      >
        <iconButton
          :class="{ 'current-page': route.name == 'groupView' }"
          class="iconBtn"
          @click="toBoard('groupView', boardID)"
          :fasIcon="'users-gear'"
        />
      </template>
    </template>
    <template v-else>
      <iconButton
        class="iconBtn"
        @click="popupLogin(props.destination, router, userStateStore)"
        :fasIcon="'right-to-bracket'"
      />
    </template>
  </div>
</template>

<script setup>
import { useUserStateStore } from '../stores/userState'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { popupLogin } from '../views/popupLogin'
import IconButton from './buttons/iconButton.vue'
import { useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

const props = defineProps({
  destination: {
    type: Object,
    required: true
  }
})
const route = useRoute()
const boardID = route.params.boardUUID
const userStateStore = useUserStateStore()

const userData = useDocument(doc(db, 'Users', `${userStateStore.user.data.uid}`))
const router = useRouter()

const boardUUID = computed(() => route.params.boardUUID)

const boardData = useDocument(doc(db, 'Boards', boardUUID.value))

const toBoard = (route, boardUUID) => {
  router.push({ name: route, params: { boardUUID: boardUUID } })
}
</script>
<style scoped>
.dashboard {
  gap: 15px;
  display: flex;
}
.current-page {
  border-color: var(--color-accent);
  color: var(--color-tertiary);
  background-color: var(--color-accent);
}
.iconBtn:hover {
  border-color: var(--color-accent);
  cursor: pointer;
}
</style>
