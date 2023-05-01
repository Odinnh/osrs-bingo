<template>
  <form @submit.prevent="toBoard">
    Enter your bingo key: <input type="text" v-model="boardUUID" />
    <button class="btn" :disabled="boardUUID == ''">Open Board</button>
  </form>
  <routerView :key="route.fullPath" />
</template>
<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const boardUUID = ref('')
const toBoard = () => {
  router.push({ name: 'overview', params: { boardUUID: boardUUID.value } })
}
</script>
<style scoped>
input {
  display: inline-block;
  padding: 0.5rem;
  background-color: #7b7b7b;
  border: none;
  border-top: 2px solid #0b0b0b;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin-right: 5px;
}
</style>
