<template>
  <h1>Log in</h1>
  <div class="block">
    <button
      class="btn"
      @click.prevent="popupLogin({ name: 'userOverview' }, router, userStateStore)"
    >
      Log in with Google
    </button>
    {{ users }}
  </div>
</template>
<script setup>
import { useUserStateStore } from '../stores/userState'
import { useRouter } from 'vue-router'
import { popupLogin } from './popupLogin'

const userStateStore = useUserStateStore()

const router = useRouter()
</script>
<style scoped></style>
