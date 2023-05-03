<template>
  <section></section>
  <section>
    <BingoBoard :boardUUID="boardUUID" :teamCode="teamCode" />
  </section>
  <section></section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
//project modules
import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()
const teamCode = computed(() => route.params.teamCode)
const boardUUID = computed(() => route.params.boardUUID)
</script>

<style scoped>
textarea {
  border: 1px solid white;
  background-color: #343434;
  color: white;
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
</style>
