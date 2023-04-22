<script setup>
import {ref, onMounted }from 'vue'
 const props = defineProps({
    tile:{
        type:Object,
        required:true
    }
 })

const tileData = ref(null)
onMounted(()=>{
    tileData.value = props.tile
}) 

</script>
<template>
    <div v-if="tileData" class="tile" :data-coord="tile.coords">{{ tileData.coords }}</div>
</template>
<style scoped>
.tile{
    font-family: 'Roboto', sans-serif;
    user-select: none;
    box-sizing: border-box;
    border: var(--border);
    border-radius: var(--border-radius);
    position: relative;
    overflow: clip;
    aspect-ratio: 1;
}</style>