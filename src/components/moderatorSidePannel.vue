<script setup>
import { computed } from 'vue'
const props = defineProps({
    tileData: {
        type: Object,
        required: true
    },
    groups: {
        type: Object,
        required: true
    }
})
const tileData = computed(() => props.tileData)
const MODERATOR = computed(() => props.MODERATOR)
const groups = computed(() => props.groups.filter(group => group.name !== 'moderator'))
const fn1 = (id) => { console.log(id) }
</script>
<template>
    <div v-if="props.tileData" :key="props.tileData.id">

        <h2>{ {{ tileData.id.split('')[0] }} , {{ tileData.id.split('')[1] }} }</h2>
        <h1>{{ tileData.title }}</h1>
        <p>{{ tileData.description }}</p><button class="prevent-select">Toggle Collected</button>
        <ul>
            <li v-for="group in groups">{{ group.name }} : {{ group.verify.includes(tileData.id) }}<br>
                collected: <input type="checkbox" :checked="group.verify.includes(tileData.id)" @click="fn1(tileData.id)">
            </li>
        </ul>
    </div>
</template>
