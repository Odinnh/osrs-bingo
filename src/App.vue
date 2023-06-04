<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <RouterView :key="route.fullPath" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: var(--color-secondairy);
  padding: 15px;
  min-height: 100vh;
}
</style>
