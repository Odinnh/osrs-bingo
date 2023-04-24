<script setup>
import { onMounted, ref } from 'vue'
import {useRoute} from "vue-router";

import BingoBoard from '@/components/BingoBoard.vue'

const route = useRoute()
const teamId = ref(null)
onMounted(()=>{
  teamId.value = route.params.id
})

</script>

<template>
   <p>Build a board
   <BingoBoard/></p>
</template>

