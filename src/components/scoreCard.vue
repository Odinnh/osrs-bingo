<template>
    <div>
        <ul v-if="props.groupsData">
            <li v-for="(group, index) in props.groupsData" :key="index + groupsData">
                <tileFlag :color="group.color" class="tileFlag" :class="'flag-end-' + group.flagEnd" :icon="group.icon"
                    :style="{ '--groupColor': group.color, '--width': (750 / 750 * 100) * 1.5 + 'px' }" />
                {{ group.name }}<br>
                score: {{ group.points }}<br><br>
            </li>
        </ul>
    </div>
</template>
<script setup>
import tileFlag from './tileFlag.vue';

const props = defineProps({
    groupsData: {
        type: Object,
        required: true
    }
})
</script>
<style scoped>
ul {
    list-style-type: none;
    z-index: 100;
}

.tileFlag {
    display: block;
    position: relative;
    width: var(--width);
    z-index: 100
}

.tileFlag:after {
    display: block;
    height: 100%;
    position: absolute;
    aspect-ratio: 1;
    top: 0;
    left: var(--width);
    z-index: 50;
    content: ' ';
    background-color: var(--groupColor);
}

.flag-end-round:after {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
}

.flag-end-split:after {
    background-color: unset;
    border-width: 11px;
    border-style: solid;
    height: 0;
    border-left-color: var(--groupColor);
    border-right-color: transparent;
    border-top-color: var(--groupColor);
    border-bottom-color: var(--groupColor);
}

.flag-end-point:after {
    background-color: unset;
    border-width: 11px;
    border-left-width: 22px;
    aspect-ratio: 2/4;
    border-style: solid;
    height: 0;
    border-left-color: var(--groupColor);
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
}</style>