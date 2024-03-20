<template>
  <button class="icon-button btn" :class="{ outline: props.fasIcon == props.groupIcon }">
    {{ props.label }}
    <font-awesome-icon
      :class="{ outline: props.fasIcon == props.groupIcon }"
      :icon="['fa', props.fasIcon]"
    />
  </button>
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
  },
  label: {
    required: false,
    type: String
  }
})
</script>
<style scoped>
.outline {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
</style>
