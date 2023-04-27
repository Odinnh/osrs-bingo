<template>
    <form @submit.prevent="toBoard">
        Enter your bingo key: <input type="text" v-model="boardUUID" />
        <button class="btn" :disabled="boardUUID == ''">team 1</button>
    </form>
    <router-view :key="route.fullPath" />
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
<style></style>