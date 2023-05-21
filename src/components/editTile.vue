<template>
  <div>
    id:
    {{ boardStore.selectedTile.id }}<br />
    <div class="tile">
      <img :src="boardStore.selectedTile.img" alt="" />
    </div>
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
        id="addtiledescription"
      /><br />
      points:
      <input
        type="text"
        v-model="boardStore.selectedTile.points"
        name="points"
        id="addtilepoints"
      /><br />
      img:
      <input type="text" v-model="boardStore.selectedTile.img" name="img" id="addtileimg" /><br />
      hidden:
      <input
        v-if="boardStore.selectedTile?.hidden !== undefined"
        type="checkbox"
        class="toggle"
        v-model="boardStore.selectedTile.hidden"
        name="hidden"
        id="addtilehidden"
      /><br />
      type: {{ boardStore?.selectedTile?.type }}<br />
      <select
        v-if="boardStore.selectedTile?.type !== undefined"
        v-model="boardStore.selectedTile.type"
      >
        <option disabled value="">Please select one</option>
        <option>drop</option>
        <option>null</option>
        <option>exp</option>
      </select>
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
    points: parseInt(tempTile.points),
    hidden: tempTile?.hidden !== undefined ? tempTile.hidden : false,
    type: tempTile?.type !== undefined ? tempTile.type : 'drop'
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

.tile {
  font-family: 'Roboto', sans-serif;
  user-select: none;
  box-sizing: border-box;
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--color-tertiary);
  position: relative;
  overflow: clip;
  aspect-ratio: 1;
  box-sizing: border-box;
}

.tile img {
  box-sizing: border-box;
  --size: 75%;
  position: absolute;
  inset: 50%;
  margin-left: calc(-1 * (var(--size) / 2));
  margin-top: calc(-1 * (var(--size) / 2));
  width: var(--size);
  height: var(--size);
  object-fit: contain;
}
</style>
