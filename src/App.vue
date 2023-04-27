<script setup>
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <div class="container">
    <router-view :key="route.fullPath" />
  </div>
</template>

<style>
body{
  background: var(--color-tertiary);
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;

}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-block: 50px;
}
.container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
section {
  display: flex;
  gap: 20px;
  margin: auto;
  animation: 0.8s zoom-in ease-out;
}
@keyframes zoom-in {
  0% {
    scale: 0;
  }

  100% {
    scale: 1;
  }
}
.btn {
  display: inline-block;
  padding: 0.5rem;
  background-color: #343434;
  border: none;
  border-bottom: 2px solid #0b0b0b;
  border-radius: 5px;
  color: white;
  text-decoration: none;
}
.btn:active {
  border-bottom: 0px solid #0b0b0b;
  border-top: 2px solid #0b0b0b;
  margin-top: -2px;
  margin-bottom: 2px;
}
.btn:disabled {
  pointer-events: none;
  color:black;
}
input[type='text']{
  display: inline-block;
  padding: 0.5rem;
  background-color: #7b7b7b;
  border: none;
  border-top: 2px solid #0b0b0b;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin-right:5px;
}
</style>
