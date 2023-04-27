<template>
  <main v-if="tiles" class="bingo-board">
    <BoardTile v-for="tile in tiles" :key="tile.id" :tile="tile" :collected="collected"  @click="setSidePannel(tile)"/>
    <!-- <addTile :boardUUID="props.boardUUID"/> -->
  </main>
  <aside>
    {{ boardSettings }}
    <p v-if="props.teamCode">{{ props.teamCode }}</p>
    <form v-if="!props.teamCode" @submit.prevent="goToTeam">
      team code: <input type="text" name="teamId" v-model="teamCode">
    </form>
    <sidePannel :tileData="tileData" :collected="collected"/>
  </aside>
</template>

<script setup>
const props = defineProps({
  boardUUID: {
    type: String
  },
  teamCode: {
    type: String,
  }
})
import BoardTile from '@/components/BoardTile.vue'
import sidePannel from '@/components/sidePannel.vue'
// import addTile from '@/components/addTile.vue'
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

const boardSettings = useDocument(doc(db, 'Boards', props.boardUUID))
const tiles = useDocument(collection(db, `Boards/${props.boardUUID}/Tiles`))
const { data: groupData } = useDocument(doc(db, `Boards/${props.boardUUID}/groups/${props.teamCode}/`))


const boardWidth = computed(() => {
  return boardSettings?.value?.settings.width || 7
})
const boardHeight = computed(() => {
  return boardSettings?.value?.settings.height || 7
})
const collected = computed(() => {
  return groupData?.value?.collected || []
})

//functions
const goToTeam = () => {
  if (teamCode.value !== '') {
    router.push({ name: 'private-board', params: { boardUUID: props.boardUUID, teamCode: teamCode.value } })
  }
}
const setSidePannel = (tile) =>{
  tileData.value = tile
}

</script>

<style scoped>
.bingo-board {
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

aside{

    --color-primary: #D9D9D9;
    --color-secondairy: #242424;
    --border-radius: 5px;
    --border: 1px solid var(--color-primary);
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
</style>
