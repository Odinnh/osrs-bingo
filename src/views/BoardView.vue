<script setup>
//vue modules
import { computed } from 'vue'
import { useRoute } from 'vue-router'
//external modules

//project modules
import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()

const teamCode = computed(() => route.params.teamCode)
const boardUUID = computed(() => route.params.boardUUID)

</script>

<template>
  <BingoBoard :boardUUID="boardUUID" :teamCode="teamCode" />
</template>
