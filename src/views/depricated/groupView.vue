<template>
  <div class="container">
    <loginButton :destination="{ name: 'groupView' }" />
    <h1>groupview</h1>
    <template
      v-if="
        boardData &&
        user &&
        (user.uid == boardData.ownerID ||
          userData?.type == 'admin' ||
          boardData.editors?.includes(user.uid))
      "
    >
      <section v-if="teamToDelete?.name != undefined" class="delete-popup">
        <p class="delete-notification">
          Are you sure you want to <span class="danger">delete</span> the team:
          <span class="highlight">{{ teamToDelete?.name }}</span
          >?<br />
          this is <span class="danger">permanent</span> and you will lose all data for that team.<br />
          type the name of the team you want to <span class="danger">Delete</span> here to verify
        </p>
        <div class="delete-buttons">
          <button
            class="btn cancel"
            @click.prevent="
              () => {
                teamToDelete = undefined
                DELETEME = ''
              }
            "
          >
            Cancel
          </button>
          <input
            type="text"
            name="DELETEME"
            v-model="DELETEME"
            class="danger"
            placeholder="TEAM NAME"
          />
          <button
            class="btn danger"
            @click.prevent="
              () => {
                if (DELETEME == teamToDelete.name) {
                  DELETETEAM(teamToDelete)
                }
              }
            "
          >
            DELETE
          </button>
        </div>
      </section>
      <section v-if="GROUPS">
        <div class="group" v-for="group of GROUPS" :key="group.name">
          <h2
            name="name"
            ref="group.name"
            contenteditable
            spellcheck="false"
            @keydown.enter="
              (event) => {
                changeName(event, group)
              }
            "
            @blur.prevent="
              (event) => {
                changeName(event, group)
              }
            "
          >
            {{ group.name }}
          </h2>
          <button v-if="GROUPS.length != 1" class="btn" @click.prevent="deletePopup(group)">
            Delete Team -
          </button>
          <div class="color-container">
            <input
              type="color"
              v-model="group.color"
              @change="changeColor(group)"
              class="color-picker"
            /><input
              type="text"
              @blur.prevent="
                (event) => {
                  changeColor(group, event)
                }
              "
              @keydown.enter="
                (event) => {
                  changeColor(group, event)
                }
              "
              v-model="group.color"
            />
          </div>
          <div
            class="icon-grid"
            :style="{
              color: group.color
            }"
          >
            <iconButton
              @click="changeIcon('rocket', group)"
              :groupIcon="group.icon"
              :fasIcon="'rocket'"
            />
            <iconButton
              @click="changeIcon('spaghetti-monster-flying', group)"
              :groupIcon="group.icon"
              :fasIcon="'spaghetti-monster-flying'"
            />
            <iconButton
              @click="changeIcon('paw', group)"
              :groupIcon="group.icon"
              :fasIcon="'paw'"
            />
            <iconButton
              @click="changeIcon('hippo', group)"
              :groupIcon="group.icon"
              :fasIcon="'hippo'"
            />
            <iconButton
              @click="changeIcon('crow', group)"
              :groupIcon="group.icon"
              :fasIcon="'crow'"
            />
            <iconButton
              @click="changeIcon('frog', group)"
              :groupIcon="group.icon"
              :fasIcon="'frog'"
            />
            <iconButton
              @click="changeIcon('feather-pointed', group)"
              :groupIcon="group.icon"
              :fasIcon="'feather-pointed'"
            />
            <iconButton
              @click="changeIcon('cat', group)"
              :groupIcon="group.icon"
              :fasIcon="'cat'"
            />
            <iconButton
              @click="changeIcon('dove', group)"
              :groupIcon="group.icon"
              :fasIcon="'dove'"
            />
            <iconButton
              @click="changeIcon('spoon', group)"
              :groupIcon="group.icon"
              :fasIcon="'spoon'"
            />
            <iconButton
              @click="changeIcon('ghost', group)"
              :groupIcon="group.icon"
              :fasIcon="'ghost'"
            />
            <iconButton
              @click="changeIcon('heart', group)"
              :groupIcon="group.icon"
              :fasIcon="'heart'"
            />
            <iconButton
              @click="changeIcon('hand-fist', group)"
              :groupIcon="group.icon"
              :fasIcon="'hand-fist'"
            />
            <iconButton
              @click="changeIcon('hat-wizard', group)"
              :groupIcon="group.icon"
              :fasIcon="'hat-wizard'"
            />
            <iconButton
              @click="changeIcon('tree', group)"
              :groupIcon="group.icon"
              :fasIcon="'tree'"
            />
            <iconButton
              @click="changeIcon('fire', group)"
              :groupIcon="group.icon"
              :fasIcon="'fire'"
            />
          </div>
          <div class="members-list">
            <p v-for="member of group.members" :key="member">{{ member }}</p>
          </div>
        </div>
        <button class="btn add-team" @click.prevent="addNewTeam">Add team +</button>
      </section>
    </template>
    <template v-else>Not Authenticated</template>
  </div>
</template>
<script setup>
import { db } from '@/firebaseSettings'
import { collection, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCurrentUser, useDocument } from 'vuefire'
import { useBoardStore } from '../stores/board.js'
import loginButton from '../components/loginButton.vue'
import iconButton from '../components/buttons/iconButton.vue'

const route = useRoute()
const user = await getCurrentUser()
const boardStore = useBoardStore()
boardStore.setBoardUUID(route.params.boardUUID)
const userData = useDocument(doc(db, 'Users', user.uid))
boardStore.setSelectedTile('')

const { data: GROUPS } = useDocument(collection(db, 'Boards', route.params.boardUUID, 'Groups'))
const boardData = useDocument(doc(db, 'Boards', route.params.boardUUID))
const teamToDelete = ref()
const DELETEME = ref('')
const DELETETEAM = async (team) => {
  await deleteDoc(doc(db, 'Boards', route.params.boardUUID, 'Groups', team.id)).then(() => {
    teamToDelete.value = undefined
    DELETEME.value = ''
  })
}
const changeColor = (group, event = false) => {
  if (event) {
    event.target.blur()
  }
  updateDoc(doc(db, 'Boards', route.params.boardUUID, 'Groups', group.id), {
    color: group.color
  })
}

const changeName = (event, group) => {
  event.target.blur()
  if (event.target.innerText.trim() == '') {
    event.target.innerText = '<Team Name>'
  }
  group.name = event.target.innerText.trim()
  updateDoc(doc(db, 'Boards', route.params.boardUUID, 'Groups', group.id), {
    name: group.name
  })
}

const changeIcon = (icon, group) => {
  updateDoc(doc(db, 'Boards', route.params.boardUUID, 'Groups', group.id), {
    icon: icon
  })
}
const deletePopup = async (group) => {
  teamToDelete.value = group
}
const addNewTeam = () => {
  const newGroup = doc(collection(db, 'Boards', route.params.boardUUID, 'Groups'))
  setDoc(doc(db, newGroup.path), {
    name: 'Team name',
    collected: {},
    verify: {},
    icon: 'frog',
    color: '#53FF1b',
    points: 0
  })
}
</script>
<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(4, 30px);
}
</style>
../components/depricated/loginButton.vue/index.js ../../stores/board.js
