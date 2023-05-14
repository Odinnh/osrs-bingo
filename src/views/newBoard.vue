<template>
  <h1
    class="board-title"
    ref="titleElement"
    contenteditable
    spellcheck="false"
    @keydown.enter="validate"
    @blur="validate"
  >
    {{ board.name }}
  </h1>
  <div>
    name: width:
    <input min="2" max="9" name="width" type="range" v-model="board.settings.width" />{{
      board.settings.width
    }}<br />
    height: <input min="2" max="9" name="height" type="range" v-model="board.settings.height" />{{
      board.settings.height
    }}<br />
    total tiles: {{ board.settings.width * board.settings.height }}
  </div>
  <main v-if="tiles" class="bingo-board">
    <template v-for="tile of tiles" :key="tile.coordinates">
      <emptyTile :tile="tile" />
    </template>
  </main>
  <aside>
    {{ createStore.selectedTile.hasOwnProperty('coordinates') }}
    <EditTileSidePanel v-if="createStore.selectedTile.hasOwnProperty('coordinates')" />
  </aside>
  <button class="btn" @click.prevent="addBoardThenRoute">Save Settings</button>
</template>

<script setup>
import { ref, computed } from 'vue'
import emptyTile from '../components/emptyTile.vue'
import EditTileSidePanel from '../components/editTileSidePanel.vue'
import { useCreateStore } from '../stores/boardCreation'
import { setDoc, doc, collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

import { firebaseApp } from '@/firebaseSettings'
import { useRouter } from 'vue-router'

const db = useFirestore(firebaseApp)
const createStore = useCreateStore()
const router = useRouter()

const board = ref({
  name: '<name of bingo board>',
  settings: {
    width: 8,
    height: 11,
    public: false
  }
})
const titleElement = ref(null)

const validate = (event) => {
  event.target.blur()
  board.value.name = titleElement.value.innerText.trim()
}

const tiles = computed(() => {
  let tempObject = {}
  for (
    let i = 0;
    i <= parseInt(board.value.settings.width) * board.value.settings.height - 1;
    i++
  ) {
    console.table({
      index: i,
      x: ((i % parseInt(board.value.settings.width)) + 1) * 100,
      y: Math.floor(i / parseInt(board.value.settings.width)) + 1
    })
    let coords =
      ((i % parseInt(board.value.settings.width)) + 1) * 100 +
      (Math.floor(i / parseInt(board.value.settings.width)) + 1)
    tempObject[coords] = { coordinates: coords }
  }
  return tempObject
})
const addBoardThenRoute = async () => {
  const newBoard = doc(collection(db, 'Boards'))

  await setDoc(newBoard, board.value).then(() => {
    router.push({
      name: 'editBoard',
      params: {
        boardUUID: newBoard.id
      }
    })
  })
}
</script>

<style scoped>
.bingo-board {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  max-width: min(70vh, 70vw);
  background-color: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(v-bind('board.settings.width'), 1fr);
  grid-template-rows: repeat(v-bind('board.settings.height'), 1fr);
  gap: 5px;
  padding: 20px;
}
.board-title::after {
  content: '|';
  animation: blink 0.6s infinite alternate;
}
.board-title:focus::after {
  animation-play-state: paused;
  opacity: 0 !important;
  animation: none;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
