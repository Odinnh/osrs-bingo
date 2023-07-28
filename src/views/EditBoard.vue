<template>
  <div class="container">
    <loginButton :destination="{ name: 'editBoard', params: boardUUID }" />

    <template
      v-if="
        (boardData && user && (user.uid == boardData.ownerID || userData?.type == 'admin')) ||
        boardData?.editors?.includes(user.uid)
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
            name="name"
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
        <aside class="detail-pane" v-if="boardStore.selectedTile != ''">
          <div style="justify-content: end; display: flex">
            <iconButton
              @click="
                () => {
                  boardStore.setSelectedTile('')
                }
              "
              class="iconBtn btn close"
              :fasIcon="'xmark'"
            />
          </div>
          <editTile :tile="boardStore.selectedTile" />
        </aside>
      </section>
      <section class="board-settings">
        <h2>Board Settings</h2>
        <div>
          <h3>Rules:</h3>
          <div>
            <p
              class="rules input"
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
        <!-- <section>
          <input
            :id="group.id + tileData.id"
            type="checkbox"
            class="toggle"
            :key="group.id + tileData.id"
            v-bind:checked="group.collected.hasOwnProperty(props.tileData.id)"
            @click.prevent="updateToCompleted({ tile: tileData, group: group })"
          />
        </section> -->
        <div>
          <h3>Moderators:</h3>

          <div class="moderators">
            <ul>
              <li v-for="mod in moderators" :key="mod">
                <FontAwesomeIcon :icon="['fas', 'caret-right']" /><span class="UID">{{ mod }}</span>
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
          <h3>Editors:</h3>
          <div class="Editors">
            <ul>
              <li v-for="editor in editors" :key="editor">
                <FontAwesomeIcon :icon="['fas', 'caret-right']" />
                <span class="UID">{{ editor }}</span>
                <button class="btn" @click.prevent="removeEditor(editor)">remove</button>
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
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCurrentUser, useDocument } from 'vuefire'
import { db } from '@/firebaseSettings'
import { collection, doc, updateDoc } from 'firebase/firestore'
import BingoBoard from '../components/BingoBoard.vue'
import editTile from '../components/editTile.vue'
import { useBoardStore } from '../stores/board.js'
import loginButton from '../components/loginButton.vue'
import iconButton from '../components/buttons/iconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const user = await getCurrentUser()
const boardStore = useBoardStore()
const newModerator = ref('')
const newEditor = ref('')

const route = useRoute()
boardStore.setBoardUUID(route.params.boardUUID)
boardStore.setSelectedTile('')
const boardUUID = boardStore.boardUUID
const userData = useDocument(doc(db, 'Users', user.uid))
const { data: GROUPS } = useDocument(collection(db, 'Boards', boardUUID, 'Groups'))

const { data: boardData, promise: boardDataPromise } = useDocument(doc(db, 'Boards', boardUUID))
await boardDataPromise.value
const moderators = boardData?.value?.moderators
const editors = boardData?.value?.editors
console.log(typeof moderators)
console.log(typeof editors)
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
  console.log(typeof moderators)
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
</script>

<style scoped>
.main-section {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: calc(3 * var(--border-radius));
  grid-template-areas: ' board detail';
  /* position: relative; */
}
.detail-pane {
  background-color: var(--color-tertiary);
  padding: 15px;
  border-radius: var(--border-radius);
  height: max-content;
  position: sticky;
  top: 15px;
}
.bingo-board {
  grid-area: board;
}
.score-card {
  grid-area: score;
}
.detail-pane {
  grid-area: detail;
}
.btn {
  padding: 10px;
}
@media screen and (max-width: 900px) {
  .main-section {
    grid-template-columns: 1fr;
    grid-template-areas: 'board' 'detail';
  }
  .board-settings {
    grid-area: score;
  }
}
ul {
  list-style-type: none;
}
.UID {
  background: var(--color-tertiary);
}
</style>
