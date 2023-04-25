<script setup>
//vue modules
import { computed } from 'vue'
import { useRoute } from 'vue-router'
//external modules

//project modules
import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()

const teamId = computed(() => route.params.id)
</script>

<template>
  <p v-if="teamId">
    team {{ teamId }}<br />
    <BingoBoard />
  </p>
</template>
