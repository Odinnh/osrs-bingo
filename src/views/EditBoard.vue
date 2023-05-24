<template>
  <button
    v-if="user && user.data.uid != 0"
    class="btn dashboard"
    @click.prevent="router.push({ name: 'boardOverview' })"
  >
    To Dashboard
  </button>
  <button v-else class="btn dashboard" @click.prevent="popupLogin">login</button>
  <template
    v-if="
      boardData &&
      user.data.ui != 0 &&
      (user.data.uid == boardData.ownerID ||
        user.data.uid == ADMIN_ID ||
        boardData.editors.includes(user.data.uid))
    "
  >
    <section>
      <h1 class="title-wrap" @click.prevent="selectEl()">
        <span
          class="board-title"
          ref="titleElement"
          contenteditable
          spellcheck="false"
          @keydown.enter="validate"
          name="title"
          @blur.prevent="
            (event) => {
              validate(event)
            }
          "
          >{{ boardData.name }}</span
        >
        <span class="pen">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </h1>
    </section>
    <section class="main-section">
      <BingoBoard
        :boardData="boardData"
        :groupsData="groupsData"
        :tilesData="tilesData"
        :key="'bingo-board-' + boardStore.boardUUID"
        :isEditor="true"
      />
      <aside v-if="boardStore.selectedTile != ''">
        <div style="justify-content: end; display: flex">
          <button
            class="btn close"
            @click="
              () => {
                boardStore.setSelectedTile('')
              }
            "
          >
            ╳
          </button>
        </div>
        <editTile :tile="boardStore.selectedTile" />
      </aside>
    </section>
    <section>
      <div>
        <h2>Rules:</h2>
        <div>
          <p
            class="rules"
            style="white-space: pre-wrap"
            contenteditable
            spellcheck="false"
            @blur.prevent="
              (event) => {
                validate(event)
              }
            "
            @keydown.tab.prevent
            name="rules"
          >
            {{ boardData?.rules }}
          </p>
        </div>
      </div>
      <div>
        <h2>Moderators:</h2>
        <div class="moderators">
          <ul>
            <li v-for="mod in moderators" :key="mod">
              {{ mod }}
              <button class="btn" @click.prevent="removeMod(mod)">-</button>
            </li>
            <li>
              <form @submit.prevent="addModerator">
                <input type="text" v-model="newModerator" />
                <button class="btn" type="submit">Add</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Editors:</h2>
        <div class="Editors">
          <ul>
            <li v-for="editor in editors" :key="editor">
              {{ editor }}
              <button style="margin-left: 15px" class="btn" @click.prevent="removeEditor(editor)">
                -
              </button>
            </li>
            <li>
              <form @submit.prevent="addEditor">
                <input type="text" v-model="newEditor" />
                <button class="btn" type="submit">Add</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  <template v-else>
    <h1>Not authenticated</h1>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDocument } from 'vuefire'
//external modules
import { collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'
//project modules
import BingoBoard from '../components/BingoBoard.vue'
import editTile from '../components/editTile.vue'
import { useBoardStore } from '../stores/board.js'
import { useUserStateStore } from '../stores/userState'
const ADMIN_ID = ref(import.meta.env['VITE_ADMIN_ID'])
const boardStore = useBoardStore()
const newModerator = ref('')
const newEditor = ref('')
let userStateStore = useUserStateStore()
let user = userStateStore.user
const route = useRoute()
const router = useRouter()
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')
const boardUUID = boardStore.boardUUID

const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID, 'Groups'))

const boardData = useDocument(doc(db, 'Boards', boardUUID))
const moderators = boardData?.value?.moderators
const editors = boardData?.value?.editors
const groupsData = computed(() => {
  let tempObject = {}
  if (GROUPS) {
    GROUPS?.value?.forEach((group) => {
      if (group.name != 'moderator') {
        tempObject[group.id] = {
          id: group.id,
          name: group.name,
          member: group.members,
          icon: group.icon,
          color: group.color,
          points: group.points,
          flagEnd: group.flagEnd,
          collected: group.collected,
          verify: group.verify
        }
      }
    })
  }
  return tempObject || {}
})
const { data: tilesData } = useDocument(collection(db, `Boards/${boardUUID}/Tiles`))

const titleElement = ref(null)
const selectEl = () => {
  titleElement.value.focus()
}
const validate = (event) => {
  event.target.blur()
  let target = event.target.getAttribute('name')
  let last = boardData.value[target]

  if (event.target.innerText.trim() != '') {
    boardData.value[target] = event.target.innerText
  } else {
    boardData.value[target] = '<enter text here>'
    if (target == 'rules') {
      boardData.value[target] = ''
    }
  }
  if (last != boardData.value[target]) {
    updateDoc(doc(db, 'Boards', boardUUID), boardData.value)
  }
}

const removeMod = (mod) => {
  mod = mod.trim()
  if (moderators.indexOf(mod) !== -1) {
    moderators.splice(moderators.indexOf(mod), 1)
    updateDoc(doc(db, 'Boards', boardUUID), { moderators: moderators })
  }
}
const addModerator = () => {
  newModerator.value = newModerator.value.trim()
  if (moderators.indexOf(newModerator.value) === -1) {
    moderators.push(newModerator.value)
    updateDoc(doc(db, 'Boards', boardUUID), { moderators: moderators })
  }
}

const removeEditor = (editor) => {
  editor = editor.trim()
  if (editors.indexOf(editor) !== -1) {
    editors.splice(editors.indexOf(editor), 1)
    updateDoc(doc(db, 'Boards', boardUUID), { editors: editors })
  }
}
const addEditor = () => {
  newEditor.value = newEditor.value.trim()
  if (editors.indexOf(newEditor.value) === -1) {
    editors.push(newEditor.value)
    updateDoc(doc(db, 'Boards', boardUUID), { editors: editors })
  }
}

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()
const auth = getAuth()

const popupLogin = () => {
  signInWithPopup(auth, provider)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
      router.push({ name: 'boardOverview' })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode, errorMessage)
    })
}
</script>

<style scoped>
textarea {
  border: 1px solid var(--color-primary);
  background-color: var(--background-color);
  color: var(--color-primary);
  font-size: 1.1rem;
  padding: 15px;
}

.heading h2 {
  display: inline;
  margin-right: 15px;
}
.main-section {
  display: flex;
  justify-content: center;
}
aside {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 300px;
}

.title-wrap:focus-within .pen,
.title-wrap:focus .pen {
  display: none;
}
.title-wrap {
  width: max-content;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  font-size: 14pt;
}
li {
  display: flex;
  list-style-type: none;
}
li .btn {
  flex: 0;
}
.rules {
  margin-top: 25px;
  white-space: pre-line;
  word-wrap: break-word;
  max-width: 30ch;
  width: 30ch;
  background: var(--color-secondairy);
  border-radius: var(--border-radius);
  padding: 15px;
}
</style>
