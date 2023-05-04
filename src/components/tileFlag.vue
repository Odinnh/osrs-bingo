<template>
  <div class="flag" :style="{ backgroundColor }" :class="{ inverted: props.inverted }">
    <FontAwesomeIcon class="icon" :icon="['fas', props.icon]" />
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  color: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  inverted: {
    type: Boolean,
    required: false,
    default: () => false
  }
})
</script>

<style scoped>
.flag {
  background-color: v-bind('props.color');
  padding: 2px;
}
.icon {
  position: relative;
  z-index: 150;
}
.inverted {
  color: var(--color-secondairy);
  background-color: var(--color-primary);
  --groupColor: var(--color-primary) !important;
}
</style>
