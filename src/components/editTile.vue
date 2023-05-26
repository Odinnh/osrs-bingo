<template>
  <div>
    id:
    {{ boardStore.selectedTile.id }}<br />
    <div v-if="boardStore.selectedTile.type != 'null'" class="tile">
      <img :src="boardStore.selectedTile.img" alt="" />

      <div v-if="boardStore.selectedTile.altImg" class="sub-tile">
        <img :src="boardStore.selectedTile.altImg" alt="" />
      </div>
    </div>
    <form @submit.prevent="addTileToDB">
      <div class="input">
        img:
        <input
          v-if="boardStore.selectedTile.type != 'null'"
          type="text"
          v-model="boardStore.selectedTile.img"
          name="img"
          id="addtileimg"
          @blur.prevent="
            (event) => {
              updateImg(event)
            }
          "
          @keydown.enter="
            (event) => {
              updateImg(event)
            }
          "
        />
      </div>
      <div class="input">
        alt:
        <input
          type="text"
          v-if="boardStore.selectedTile.type != 'null'"
          v-model="boardStore.selectedTile.altImg"
          name="altImg"
          id="addtileimg"
          @blur.prevent="
            (event) => {
              updateImg(event)
            }
          "
          @keydown.enter="
            (event) => {
              updateImg(event)
            }
          "
        />
      </div>
      <h2 @click="focusOn('#title')" v-if="boardStore.selectedTile.type != 'null'">
        <span
          ref="boardStore.selectedTile.title"
          contenteditable
          class="editable"
          spellcheck="false"
          @keydown.prevent.enter="
            (event) => {
              validate(event)
            }
          "
          @blur.prevent="
            (event) => {
              validate(event)
            }
          "
          name="title"
          id="title"
        >
          {{ boardStore.selectedTile.title }} </span
        ><span class="pen">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </h2>
      <p @click="focusOn('#points')" v-if="boardStore.selectedTile.type != 'null'">
        <span
          type="text"
          ref="boardStore.selectedTile.points"
          contenteditable
          class="editable"
          spellcheck="false"
          @keydown.enter.prevent="
            (event) => {
              validate(event)
            }
          "
          @blur.prevent="
            (event) => {
              validate(event)
            }
          "
          name="points"
          id="points"
          >{{ boardStore.selectedTile.points }}</span
        >
        point{{ boardStore.selectedTile.points > 1 ? 's' : ''
        }}<span class="pen">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </p>

      <p @click="focusOn('#description')" v-if="boardStore.selectedTile.type != 'null'">
        description:
        <span
          type="text"
          ref="boardStore.selectedTile.description"
          contenteditable
          class="editable"
          spellcheck="false"
          @blur.prevent="
            (event) => {
              validate(event)
            }
          "
          name="description"
          id="description"
          >{{ boardStore.selectedTile.description }}</span
        ><span class="pen">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </p>
      <ul v-if="['any-unique', 'multi-item'].includes(boardStore.selectedTile.type)">
        Ellegible items:
        <li v-for="item of boardStore.selectedTile?.items" :key="item?.item">
          {{ item.item }} | {{ item.count }}
          <button class="btn" @click.prevent="removeItem(item)">-</button>
        </li>

        <form @submit.prevent="addItem">
          new <input required type="text" name="item" id="item" v-model="newItem.item" /> count:
          <input
            required
            type="number"
            name="item"
            id="item"
            min="1"
            step="1"
            v-model="newItem.count"
          />
          <button class="btn">Add item</button>
        </form>
      </ul>
      hidden:
      <input
        v-if="
          boardStore.selectedTile?.hidden !== undefined && boardStore.selectedTile.type != 'null'
        "
        type="checkbox"
        class="toggle"
        v-model="boardStore.selectedTile.hidden"
        ref="refs.hidden"
        name="hidden"
        id="addtilehidden"
      /><br />
      type:
      {{ boardStore?.selectedTile?.type }}<br />
      <select
        v-if="boardStore.selectedTile?.type !== undefined"
        v-model="boardStore.selectedTile.type"
      >
        <option disabled value="">Please select one</option>
        <option>drop</option>
        <option>multi-item</option>
        <option>null</option>
        <option>exp</option>
      </select>
      <button type="submit">Update Tile</button>
    </form>
  </div>
</template>
<script setup>
import { setDoc, doc, updateDoc } from 'firebase/firestore'

import { db } from '@/firebaseSettings'
import { useBoardStore } from '../stores/board'
import { computed } from 'vue'
const boardStore = useBoardStore()
const addTileToDB = async () => {
  let tempTile = boardStore.selectedTile
  boardStore.setSelectedTile('')
  await setDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', tempTile.id), {
    description: tempTile.description,
    altImg: tempTile.altImg,
    img: tempTile.img,
    title: tempTile.title,
    points: parseInt(tempTile.points),
    hidden: tempTile?.hidden !== undefined ? tempTile.hidden : false,
    type: tempTile?.type !== undefined ? tempTile.type : 'drop'
  })
  boardStore.setSelectedTile(tempTile)
}

const validate = (event) => {
  if (event.target.innerText.trim() != '') {
    boardStore.selectedTile[event.target.getAttribute('name')] =
      event.target.getAttribute('name') == 'points'
        ? parseInt(event.target.innerText.trim())
        : event.target.innerText.trim()
  } else {
    boardStore.selectedTile[event.target.getAttribute('name')] =
      event.target.getAttribute('name') == 'points' ? 0 : ''
  }
  if (event.target.innerText.trim() != boardStore.selectedTile[event.target.getAttribute('name')]) {
    updateDoc(
      doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id),
      boardStore.selectedTile
    )
  }
}
const updateImg = (event) => {
  if (event.target.value.trim() != '' || [event.target.getAttribute('name')] == 'altImg') {
    boardStore.selectedTile[event.target.getAttribute('name')] = event.target.value.trim()
  } else {
    boardStore.selectedTile[event.target.getAttribute('name')] =
      'https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e'
  }
  if (event.target.value.trim() != boardStore.selectedTile[event.target.getAttribute('name')]) {
    updateDoc(
      doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id),
      boardStore.selectedTile
    )
    console.log('written')
  }
}
const focusOn = (el) => {
  document.querySelector(el).focus()
}

const removeItem = (item) => {
  if (boardStore.selectedTile.items.indexOf(item) !== -1) {
    boardStore.selectedTile.items.splice(boardStore.selectedTile.items.indexOf(item), 1)
    updateDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
      items: boardStore.selectedTile.items
    })
  }
}

const newItem = computed((item, count) => {
  return { item: item, count: count }
})

const addItem = () => {
  let canUpdate = true
  newItem.value.item = newItem.value.item.trim()
  if (objExists(newItem.value.item) !== -1) {
    boardStore.selectedTile.items[objExists(newItem.value.item)].count = newItem.value.count
  }
  if (objExists(newItem.value.item) === -1 && newItem.value.item != '') {
    if (boardStore.selectedTile.items == undefined) {
      boardStore.selectedTile.items = []
    }
    boardStore.selectedTile.items.push({ item: newItem.value.item, count: newItem.value.count })
  }
  if (newItem.value.item != '' && canUpdate) {
    updateDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
      items: boardStore.selectedTile.items
    })
  }
}
const objExists = (item) => {
  return boardStore.selectedTile.items
    ? boardStore.selectedTile.items
        .map(function (e) {
          return e.item
        })
        .indexOf(item)
    : -1
}
</script>
<style scoped>
.tile,
.sub-tile {
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
.sub-tile {
  width: 40%;
  background: var(--color-tertiary);
  position: absolute;
  bottom: -1px;
  left: -1px;
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
.img-pen {
  position: absolute;
  top: 1em;
  right: 1em;
  display: block;
  height: 1em;
}
.input {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}
.input input {
  flex-grow: 1;
}
ul {
  gap: 15px;
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0;
  padding: 0;
  list-style-position: inside;
}
</style>
