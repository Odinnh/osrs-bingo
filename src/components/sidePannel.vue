<script setup>
import { computed } from 'vue'
import BoardTile from './BoardTile.vue';
const props = defineProps({
    tileData: {
        type: Object,
        required: true
    },
    collected: {
        type: Array,
        default: () => { }
    }
})
const tileData = computed(() => props.tileData)
</script>
<template>
    <div v-if="props.tileData">
        <BoardTile :tile="tileData" :collected="props.collected"/>
        <h2>{{ tileData.id }}</h2>
    <h1>{{ tileData.title }}</h1>
    <p>{{ tileData.description }}</p><button class="prevent-select">Toggle Collected</button>
</div></template>
