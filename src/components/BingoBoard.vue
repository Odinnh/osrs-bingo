<script setup>
import {ref, onMounted }from 'vue'
import Tile from '@/components/Tile.vue'

const tiles = ref(null)

const boardWidth = ref(5)
const boardHeight = ref(6)
onMounted(()=>{
    tiles.value = {'11':{
        coords:'11',
        name:'tile {1, 1}'
    },'21':{
        coords:'21',
        name:'tile {2, 1}'
    },
    '31':{
        coords:'31',
        name:'tile {1, 1}'
    },'41':{
        coords:'41',
        name:'tile {2, 1}'
    },
    '51':{
        coords:'51',
        name:'tile {1, 1}'
    },'52':{
        coords:'52',
        name:'tile {2, 1}'
    },'53':{
        coords:'53',
        name:'tile {1, 1}'
    },'54':{
        coords:'54',
        name:'tile {2, 1}'
    }
    }
})
</script>
<template>
    <main class="bingo-board">
        <Tile v-if="tiles" v-for="(tile, index) in tiles" :key="index" :tile="tile"/>
    </main>
</template>
<style scoped>
.bingo-board{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    aspect-ratio: v-bind(boardWidth) / v-bind(boardHeight);
    width: min(70vh, 70vw);
    background-color: var(--color-secondairy);
    border: var(--border);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: repeat(v-bind(boardWidth), 1fr);
    grid-template-rows: repeat(v-bind(boardHeight), 1fr);
    gap: 5px;
    padding: 20px;
    user-select: none;
}
</style>