<template>
  <button
    v-if="userStateStore.user && userStateStore.user.data.uid != 0"
    class="btn dashboard"
    @click.prevent="router.push({ name: 'userOverview' })"
  >
    To Dashboard
  </button>
  <button
    v-else
    class="btn dashboard"
    @click.prevent="popupLogin(props.destination, router, userStateStore)"
  >
    login
  </button>
</template>

<script setup>
import { useUserStateStore } from '../stores/userState'
import { useRouter } from 'vue-router'
import { popupLogin } from '../views/popupLogin'
const props = defineProps({
  destination: {
    type: Object,
    required: true
  }
})

const userStateStore = useUserStateStore()

const router = useRouter()
</script>
<style scoped></style>
