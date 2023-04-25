<template>
  <main v-if="tiles" class="bingo-board">
    <BoardTile v-for="tile in tiles" :key="tile.id" :tile="tile" :collected="collected" />
  </main>
</template>

<script setup>
const props = defineProps({
  teamId: {
    type: String
  }
})
import BoardTile from '@/components/BoardTile.vue'
import { ref, computed } from 'vue'
import { useFirestore, useDocument } from 'vuefire'
//external modules
import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)

const boardWidth = ref(7)
const boardHeight = ref(7)
const tiles = useDocument(collection(db, 'Tiles'))
const { data: groupData } = useDocument(doc(db, `groups/${props.teamId}/`))

const collected = computed(() => {
  return groupData?.value?.collected || []
})
//
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
</style>
