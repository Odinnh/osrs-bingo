<template>
  <scoreCard v-if="groupsData" class="scoreCard" :groupsData="groupsCollected" />
  <main v-if="tiles" class="bingo-board">
    <BoardTile
      v-for="tile in tiles"
      :key="tile.id"
      :tile="tile"
      :groupsData="groupsCollected"
      :selected="tile == tileSelected"
      :collected="collected"
      :verify="verify"
      @click="setSidePannel(tile)"
    />
  </main>
  <aside v-if="boardSettings?.settings?.mode == 'teams' || openAside">
    <div style="justify-content: end; display: flex">
      <button
        style="
          color: #ff3359;
          font-weight: bolder;
          font-size: 1.3rem;
          line-height: 0.2rem;
          aspect-ratio: 1/1.2;
          text-align: center;
          padding-top: 3px;
        "
        class="btn"
        v-if="openAside"
        @click="
          () => {
            openAside = !openAside
            tileSelected = ''
          }
        "
      >
        ╳
      </button>
    </div>
    <template v-if="boardSettings?.settings?.mode == 'teams'">
      <p v-if="groupData">
        <fontAwesomeIcon class="icon" :icon="['fas', groupData.icon]" /> {{ groupData.name }}
      </p>
      <form v-if="!groupData" @submit.prevent="goToTeam">
        team code: <input type="text" name="teamId" v-model="teamCode" />
      </form>
    </template>
    <sidePannel
      :tileData="tileData"
      :collected="collected"
      :verify="verify"
      :boardUUID="props.boardUUID"
      :teamUUID="props.teamCode"
    />
  </aside>
</template>

<script setup>
const props = defineProps({
  boardUUID: {
    type: String
  },
  teamCode: {
    type: String
  }
})
import BoardTile from '@/components/BoardTile.vue'
import sidePannel from '@/components/sidePannel.vue'
import scoreCard from '@/components/scoreCard.vue'
//external modules
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFirestore, useDocument } from 'vuefire'

import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)
const router = useRouter()

const teamCode = ref('')
const tileData = ref('')
const tileSelected = ref('')
const openAside = ref(false)

const boardSettings = useDocument(doc(db, 'Boards', props.boardUUID))
const tiles = useDocument(collection(db, `Boards/${props.boardUUID}/Tiles`))
const { data: groupData } = useDocument(
  doc(db, `Boards/${props.boardUUID}/Groups/${props.teamCode}/`)
)
const { data: groupsData } = useDocument(collection(db, 'Boards', props.boardUUID, 'Groups'))

const boardWidth = computed(() => {
  return boardSettings?.value?.settings.width || 7
})
const boardHeight = computed(() => {
  return boardSettings?.value?.settings.height || 7
})
const collected = computed(() => {
  return groupData?.value?.collected || []
})
const verify = computed(() => {
  return groupData?.value?.verify || []
})

const groupsCollected = computed(() => {
  let tempObject = {}
  if (groupsData) {
    groupsData?.value?.forEach((group) => {
      if (group.name != 'moderator') {
        tempObject[group.id] = {
          collected: group.collected,
          color: group.color,
          name: group.name,
          icon: group.icon,
          points: group.points,
          flagEnd: group.flagEnd,
          member: group.members
        }
      }
    })
  }
  return tempObject || {}
})

//functions
const goToTeam = async () => {
  if (teamCode.value !== '') {
    let route = {
      name: 'private-board',
      params: { boardUUID: props.boardUUID, teamCode: teamCode.value }
    }

    const { data: modCheck } = useDocument(
      doc(db, 'Boards', props.boardUUID, 'Groups', teamCode.value)
    )
    if (modCheck && modCheck?.value?.name == 'moderator') {
      route.name = 'moderator'
    }
    router.push(route)
  }
}
const setSidePannel = (tile) => {
  openAside.value = true
  tileData.value = tile
  tileSelected.value = tile
}
</script>

<style scoped>
.bingo-board {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
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

aside {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  width: calc(min(29vw, 29vh) - 15px);
  background-color: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
}
.scoreCard {
  padding: 10px;
}
</style>
