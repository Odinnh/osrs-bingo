<template>
  <div class="tile" @click="addTileModal">+</div>
  <div class="modal" :class="{ open: isActive }">
    <form @submit.prevent="addTileToDB">
      coord:
      <input type="text" v-model="form.coordinate" name="coordinate" id="addtiletitle" /><br />
      title: <input type="text" v-model="form.title" name="title" id="addtiletitle" /><br />
      description:
      <input type="text" v-model="form.description" name="description" id="addtiletitle" /><br />
      icon: <input type="text" v-model="form.img" name="img" id="addtiletitle" /><br />
      type: <input type="text" v-model="form.type" name="type" id="addtiletitle" /><br />
      <button type="submit">Add Tile</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { setDoc, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

import { firebaseApp } from '@/firebaseSettings'

const db = useFirestore(firebaseApp)

const defaultForm = {
  coordinate: '',
  title: '',
  description: '',
  img: '',
  type: 'drop'
}
const form = ref({
  coordinate: '',
  title: '',
  description: '',
  img: '',
  type: ''
})
const props = defineProps({
  boardUUID: {
    type: String,
    required: true
  }
})
const isActive = ref(false)
const addTileModal = () => {
  isActive.value = !isActive.value
}
const addTileToDB = async () => {
  await setDoc(doc(db, 'Boards', props.boardUUID, 'Tiles', form.value.coordinate), {
    description: form.value.description,
    img: form.value.img,
    title: form.value.title,
    type: form.value.type
  })
  form.value = defaultForm.value
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
  font-size: 100px;
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
