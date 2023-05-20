<template>
  <div>
    id:
    {{ boardStore.selectedTile.id }}<br />
    <form @submit.prevent="addTileToDB">
      title:
      <input
        type="text"
        v-model="boardStore.selectedTile.title"
        name="title"
        id="addtiletitle"
      /><br />
      description:
      <input
        type="text"
        v-model="boardStore.selectedTile.description"
        name="description"
        id="addtiletitle"
      /><br />
      points:
      <input
        type="text"
        v-model="boardStore.selectedTile.points"
        name="type"
        id="addtiletitle"
      /><br />
      img:
      <input
        type="text"
        v-model="boardStore.selectedTile.img"
        name="type"
        id="addtiletitle"
      /><br />
      <button type="submit">Update Tile</button>
    </form>
  </div>
</template>
<script setup>
import { setDoc, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

import { firebaseApp } from '@/firebaseSettings'
import { useBoardStore } from '../stores/board'
const db = useFirestore(firebaseApp)
const boardStore = useBoardStore()

const addTileToDB = async () => {
  let tempTile = boardStore.selectedTile
  boardStore.setSelectedTile('')
  await setDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', tempTile.id), {
    description: tempTile.description,
    img: tempTile.img,
    title: tempTile.title,
    points: parseInt(tempTile.points)
  })
  boardStore.setSelectedTile(tempTile)
}
</script>
<style scoped>
.tile {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  box-sizing: border-box;
  border: var(--border);
  border-radius: var(--border-radius);
  position: relative;
  overflow: clip;
  aspect-ratio: 1;
  font-size: 1rem;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.open {
  display: block;
}
</style>
