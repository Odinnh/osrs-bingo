<template>
    <div class="flag" :style="{backgroundColor}" :class="{inverted:props.inverted}">
        <font-awesome-icon class="icon"  :icon="['fas', props.icon]" />
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
  },
  inverted: {
    type: String,
    required:false,
    default:() => false
  }
})
</script>

<style scoped>
.flag {
    background-color:v-bind('props.color');
    padding:2px;
}
.icon{
  position:relative;
  z-index: 150;
}
.inverted{
  color:#343434;
  background-color:white;
}
</style>