<template>
  <h1>Log in</h1>
  <div class="block">
    <button class="btn" @click.prevent="popupLogin({ name: 'createNewBingo' }, router)">
      Log in with Google
    </button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { popupLogin } from './popupLogin'

const router = useRouter()
</script>
<style scoped></style>
