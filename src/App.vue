<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <suspense>
      <RouterView :key="route.fullPath" />
    </suspense>
  </div>
</template>

<style>
@import url('./assets/root.css');
</style>
