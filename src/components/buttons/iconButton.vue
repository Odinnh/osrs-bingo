<template>
  <font-awesome-icon
    class="icon-button"
    :class="{ outline: props.fasIcon == props.groupIcon }"
    :icon="['fa', props.fasIcon]"
  />
</template>
<script setup>
const props = defineProps({
  groupIcon: {
    required: true,
    type: String
  },
  fasIcon: {
    required: true,
    type: String
  }
})
</script>
<style scoped>
.icon-button {
  font-size: 2rem;
  background: var(--color-secondairy);
  border: var(--border);
  border-radius: var(--border-radius);
  aspect-ratio: 1/1;
  padding: 10px;
}
.outline {
  border-color: var(--color-accent);
}
</style>
