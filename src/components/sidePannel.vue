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
        <h2>{ {{ tileData.id.split('')[0] }} , {{ tileData.id.split('')[1]  }} }</h2>
    <h1>{{ tileData.title }}</h1>
    <p>{{ tileData.description }}</p><button class="prevent-select">Mark Collected</button>
    <!-- <h2>{1, 1}</h2>
    <h1>boop-a-snoot</h1>
    <p>boop froge nose pls &lt;3 </p><button class="prevent-select">Toggle Collected</button> -->
</div>
</template>
