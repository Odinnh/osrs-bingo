<template>
  <font-awesome-icon
    class="icon-button btn"
    :class="{ outline: props.fasIcon == props.groupIcon }"
    :icon="['fa', props.fasIcon]"
  />
</template>
<script setup>
const props = defineProps({
  groupIcon: {
    required: false,
    type: String
  },
  fasIcon: {
    required: true,
    type: String
  }
})
</script>
<style scoped></style>
