<template>
  <template v-if="user.loggedIn && user.data.uid != 0 && userData.count < 5">
    <h1 class="title-wrap" @click.prevent="selectEl()">
      <span
        class="board-title"
        ref="titleElement"
        contenteditable
        spellcheck="false"
        @keydown.enter="validate"
        @blur="validate"
        >{{ board.name }}</span
      >
      <span class="pen">
        <font-awesome-icon :icon="['fas', 'pen']" />
      </span>
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
    <button class="btn" @click.prevent="addBoardThenRoute">Save Settings</button>
  </template>
  <template v-if="!user.loggedIn"><h1>not authenticated</h1></template>
  <template v-if="userData.count >= 5"><h1>You've exceded the 5 board limit</h1></template>
</template>

<script setup>
import { ref, computed } from 'vue'
import emptyTile from '../components/emptyTile.vue'
import { useCreateStore } from '../stores/boardCreation'
import { useUserStateStore } from '../stores/userState'
import { setDoc, doc, collection } from 'firebase/firestore'
import { useDocument, useFirestore } from 'vuefire'

import { firebaseApp } from '@/firebaseSettings'
import { useRouter } from 'vue-router'

const db = useFirestore(firebaseApp)
const createStore = useCreateStore()
const userStateStore = useUserStateStore()
const router = useRouter()
const board = ref({
  name: '<name of bingo board>',

  settings: {
    width: 2,
    height: 2,
    public: false
  }
})
const user = userStateStore.user
const userData = useDocument(doc(db, 'Users', `${user.data.uid}`))
const titleElement = ref(null)
const selectEl = () => {
  titleElement.value.focus()
}
const validate = (event) => {
  event.target.blur()
  if (titleElement.value.innerText.trim() == '') {
    board.value.name = 'Enter title here'
    titleElement.value.innerText = 'Enter title here'
  } else {
    board.value.name = titleElement.value.innerText.trim()
  }
}

const tiles = computed(() => {
  let tempObject = []
  for (
    let i = 0;
    i <= parseInt(board.value.settings.width) * board.value.settings.height - 1;
    i++
  ) {
    let coords =
      (Math.floor(i / parseInt(board.value.settings.width)) + 1) * 10 +
      ((i % parseInt(board.value.settings.width)) + 1)
    tempObject.push({
      title: '<title of tile>',
      points: 0,
      type: 'drop',
      description: 'description',
      coordinates: coords,
      img: 'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'
    })
  }
  return tempObject
})
const addBoardThenRoute = async () => {
  const newBoard = doc(collection(db, 'Boards'))
  await setDoc(newBoard, { ...board.value, ownerID: user.data.uid })
    .then(() => {
      tiles.value.forEach((tile) => {
        setDoc(doc(db, 'Boards', newBoard.id, 'Tiles', `${tile.coordinates}`), {
          ...tile
        })
      })
    })
    .then(() => {
      console.log(userData.value.count)
      setDoc(doc(db, 'Users', `${user.data.uid}`), { count: userData.value.count + 1 })
      createStore.setSelectedTile('')
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

.title-wrap:focus-within .pen,
.title-wrap:focus .pen {
  display: none;
}
.title-wrap {
  width: max-content;
}
</style>
