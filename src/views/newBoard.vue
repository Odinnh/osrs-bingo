<template>
  <template v-if="user && userData?.count < 5">
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
      <input min="1" max="9" name="width" type="range" v-model="board.settings.width" />{{
        board.settings.width
      }}<br />
      height:
      <input min="1" max="9" name="height" type="range" v-model="board.settings.height" />{{
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
  <template v-if="userData?.count >= 6"><h1>You've exceded the 5 board limit</h1></template>
</template>

<script setup>
import { ref, computed } from 'vue'
import emptyTile from '../components/emptyTile.vue'
import { useCreateStore } from '../stores/boardCreation'
import { setDoc, doc, collection } from 'firebase/firestore'
import { getCurrentUser, useDocument } from 'vuefire'

import { db } from '@/firebaseSettings'
import { useRouter } from 'vue-router'

const createStore = useCreateStore()
const user = await getCurrentUser()
const router = useRouter()
const board = ref({
  name: '<name of bingo board>',

  settings: {
    width: 1,
    height: 1,
    public: false
  }
})
const userData = useDocument(doc(db, 'Users', user.uid))
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
      (Math.floor(i / parseInt(board.value.settings.width)) + 1) * 100 +
      ((i % parseInt(board.value.settings.width)) + 1)
    tempObject.push({
      title: '<title of tile>',
      points: 0,
      type: 'drop',
      hidden: 'false',
      description: 'description',
      coordinates: coords,
      img: ' '
    })
  }
  return tempObject
})
const addBoardThenRoute = async () => {
  const newBoard = doc(collection(db, 'Boards'))
  const newGroup = doc(collection(db, 'Boards', newBoard.id, 'Groups'))
  await setDoc(newBoard, { ...board.value, ownerID: user.uid })
    .then(() => {
      tiles.value.forEach((tile) => {
        setDoc(doc(db, 'Boards', newBoard.id, 'Tiles', `${tile.coordinates}`), {
          ...tile
        })
      })
    })
    .then(() => {
      setDoc(doc(db, newGroup.path), {
        name: 'all',
        collected: {},
        verify: {},
        icon: 'frog',
        color: '#8a038f',
        points: 0
      })
      setDoc(doc(db, 'Users', user.uid), {
        count: userData.value.count + 1
      })
      createStore.setSelectedTile('')
      router.push({
        name: 'editBoard',
        params: {
          boardUUID: newBoard.id
        }
      })
    })
}
if (!user) {
  router.push({ name: 'loginView' })
}
</script>

<style scoped></style>
