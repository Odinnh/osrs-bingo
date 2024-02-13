<template>
  <div class="flag" :style="{ backgroundColor: props.color }" :class="{ inverted: props.inverted }">
    <FontAwesomeIcon
      ref="tileIcon"
      :class="{ blackout: props.isBlackout }"
      class="icon"
      :icon="['fas', props.icon]"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const tileIcon = ref(null)
const props = defineProps({
  color: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isBlackout: {
    type: Boolean,
    required: false,
    default: () => false
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
  padding: 2px;
}
.icon.blackout {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.icon {
  position: relative;
  z-index: 150;
}
.inverted {
  color: var(--color-secondairy) !important ;
  background-color: var(--color-primary) !important;
  --groupColor: var(--color-primary) !important;
}
</style>
