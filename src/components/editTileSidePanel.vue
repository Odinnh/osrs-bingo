<template>
  <section>
    {{ createStore }}
  </section>
</template>
<script setup>
import { useCreateStore } from '../stores/boardCreation'

const createStore = useCreateStore()
// const selectedTile = createStore.selectedTile
</script>
<style scoped></style>
