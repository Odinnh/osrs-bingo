<template>
  <div class="tile">
    {{ props.tile.coordinates }}
  </div>
</template>

<script setup>
const props = defineProps({
  tile: {
    type: Object
  }
})
</script>

<style scoped></style>
