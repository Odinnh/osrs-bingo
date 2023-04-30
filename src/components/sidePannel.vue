<template>
    <div v-if="props.tileData">
        <BoardTile :tile="props.tileData" :verify="props.verify" :collected="props.collected" />
        <h2>{ {{ props.tileData.id.split('')[0] }} , {{ props.tileData.id.split('')[1] }} }</h2>
        <h1>{{ props.tileData.title }}</h1>
        <p>{{ props.tileData.description }}</p>
        <button class="btn" @click.prevent="askforVerify"
            :disabled="(props.verify.includes(props.tileData.id) || props.collected.includes(props.tileData.id))">Mark
            Collected</button>
        <p v-if="props.tileData.id == 44">
        <div class="tooltip">
            <font-awesome-icon class="icon" :icon="['fas', 'disease']" />
            <span class="tooltiptext">Infestid89 would've gotten this tile on the 30th of April 2023 1:42 AM EST</span>
        </div>

        </p>
    </div>
</template>


<script setup>
import BoardTile from './BoardTile.vue';
import { useFirestore } from 'vuefire'

import { doc, updateDoc } from 'firebase/firestore'

import { firebaseApp } from '@/firebaseSettings'
import { faDisease } from '@fortawesome/free-solid-svg-icons';

const db = useFirestore(firebaseApp)

const props = defineProps({
    tileData: {
        type: Object,
        required: true
    },
    collected: {
        type: Array,
        default: () => { }
    },
    verify: {
        type: Array,
        default: () => { }
    },
    boardUUID: {
        type: String,
        required: true
    },
    teamUUID: {
        type: String,
        required: true
    }
})

const askforVerify = async () => {
    if (!props.verify.includes(props.tileData.id)) {
        // console.log(props.teamUUID)
        updateDoc(doc(db, 'Boards', props.boardUUID, 'Groups', props.teamUUID), { verify: [...props.verify, props.tileData.id] })
    }
}

</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
width: 249px;
background-color: #555;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 5px 0;
position: absolute;
z-index: 1;
bottom: 172%;
left: 50%;
margin-left: -124px;
opacity: 0;
transition: opacity 0.3s;
padding: 15px;
}
.icon{
    color:greenyellow;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}</style>