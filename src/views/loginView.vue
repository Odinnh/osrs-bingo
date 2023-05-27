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
<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 20px;
  margin: 0 auto;
}
.block input {
  width: 200px;
}

.btn {
  width: 200px;
}
</style>
