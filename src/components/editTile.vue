<template>
  <div>
    id:
    {{ boardStore.selectedTile.id }}<br />
    <div class="tile">
      <img :src="boardStore.selectedTile.img" alt="" />

      <div v-if="boardStore.selectedTile.altImg" class="sub-tile">
        <img :src="boardStore.selectedTile.altImg" alt="" />
      </div>
    </div>
    <div>
      Default img:
      <input
        type="text"
        v-model="boardStore.selectedTile.img"
        name="img"
        id="addtileimg"
        @focus="boardStore.inputting = true"
        @blur="
          (event) => {
            boardStore.inputting = false
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
    <div v-if="false">
      Image on completed tile:
      <input
        type="text"
        v-model="boardStore.selectedTile.altImg"
        name="altImg"
        id="addtileimg"
        @focus="boardStore.inputting = true"
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
    <h2 @click="focusOn('#title')">
      <span
        ref="boardStore.selectedTile.title"
        contenteditable
        class="editable"
        spellcheck="false"
        @focus="boardStore.inputting = true"
        @keydown.prevent.enter="
          (event) => {
            boardStore.inputting = false
            validate(event)
          }
        "
        @blur.prevent="
          (event) => {
            boardStore.inputting = false
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
    <p @click="focusOn('#points')">
      <span
        type="text"
        ref="boardStore.selectedTile.points"
        contenteditable
        class="editable"
        spellcheck="false"
        @focus="boardStore.inputting = true"
        @keydown.enter.prevent="
          (event) => {
            boardStore.inputting = false
            validate(event)
          }
        "
        @blur.prevent="
          (event) => {
            boardStore.inputting = false
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

    <p @click="focusOn('#description')">
      description:
      <span
        type="text"
        ref="boardStore.selectedTile.description"
        contenteditable
        class="editable"
        spellcheck="false"
        @focus="boardStore.inputting = true"
        @blur.prevent="
          (event) => {
            boardStore.inputting = false
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
    <div>
      <hr />
      <h3>Background color</h3>
      <input
        type="color"
        v-model="boardStore.selectedTile.bgColor"
        @change="changeColor(event)"
        class="color-picker"
      /><input
        type="text"
        @focus="boardStore.inputting = true"
        @blur.prevent="
          (event) => {
            boardStore.inputting = false
            changeColor(event)
          }
        "
        @keydown.enter="
          (event) => {
            boardStore.inputting = false
            changeColor(event)
          }
        "
        v-model="boardStore.selectedTile.bgColor"
      />
    </div>
    <hr />
    <ul v-if="['any-unique', 'multi-item'].includes(boardStore.selectedTile.type)">
      Eligible items:
      <li v-for="item of boardStore.selectedTile?.items" :key="item?.item">
        {{ item.item }} x{{ item.count }}
        <button class="btn" @click.prevent="removeItem(item)">Delete item</button>
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
    <div v-if="boardStore.selectedTile?.hidden !== undefined">
      hidden:
      <input
        type="checkbox"
        class="toggle"
        v-model="boardStore.selectedTile.hidden"
        ref="refs.hidden"
        name="hidden"
        id="addtilehidden"
        @change="updateHidden"
      />
    </div>
    type:
    <select
      v-if="boardStore.selectedTile?.type !== undefined"
      v-model="boardStore.selectedTile.type"
      @change="updateHidden"
    >
      <option disabled value="">Please select one</option>
      <option>drop</option>
      <option>multi-item</option>
      <option>null</option>
      <option>exp</option>
    </select>
  </div>
</template>
<script setup>
import { setDoc, doc, updateDoc } from 'firebase/firestore'
import { onKeyStroke } from '@vueuse/core'
import { db } from '@/firebaseSettings'
import { useBoardStore } from '../stores/board'
import { computed } from 'vue'
const boardStore = useBoardStore()

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

  setDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
    ...boardStore.selectedTile
  })
}
const updateImg = (event) => {
  if (event.target.value.trim() != '' || [event.target.getAttribute('name')] == 'altImg') {
    boardStore.selectedTile[event.target.getAttribute('name')] = event.target.value.trim()
  } else {
    boardStore.selectedTile[event.target.getAttribute('name')] = ''
  }
  updateDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
    ...boardStore.selectedTile
  })
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
const changeColor = (event = false) => {
  if (event) {
    event.target.blur()
  }
  updateDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
    bgColor: boardStore.selectedTile.bgColor
  })
}

const newItem = computed((item, count) => {
  return { item: item, count: count }
})

const updateHidden = () => {
  updateDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
    ...boardStore.selectedTile
  })
}

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
    setDoc(doc(db, 'Boards', boardStore.boardUUID, 'Tiles', boardStore.selectedTile.id), {
      ...boardStore.selectedTile,
      items: boardStore.selectedTile.items
    })
  }
  newItem.value.item = ''
  newItem.value.count = null
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
onKeyStroke(
  'h',
  () => {
    if (!boardStore.inputting) {
      boardStore.selectedTile.hidden = !boardStore.selectedTile.hidden
      console.log(boardStore.selectedTile.hidden, !boardStore.selectedTile.hidden)
      updateHidden()
    }
  },
  { dedupe: true }
)
</script>
<style scoped>
hr {
  margin-bottom: 0.5rem;
}
.tile img {
  max-width: 100%;
  z-index: 2 !important;
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
  /* filter: brightness(70%) contrast(118%) saturate(0%) hue-rotate(-46deg); */
}
</style>
