<template>
    <div class="flag" :style="{backgroundColor}">
        <font-awesome-icon :icon="['fas', props.icon]" />
    </div>
</template>
<script setup>

const props = defineProps({
  color: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required:true
  }
})
</script>

<style scoped>
.flag {
    background-color:v-bind('props.color');
    padding:2px;
}
</style>