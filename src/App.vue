<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'

const input = ref(null)
input.value = 'here'
</script>

<template>
  <header>
    Enter your bingo key: <input type="text" v-model="input" />
    <RouterLink class="btn" :to="{ name: 'private-board', params: { id: input } }" :disabled="input !== ''">team 1</RouterLink> 
  </header>
  <section>
    <router-view :key="$route.fullPath"/>
  </section>
</template>

<style>
#app, body{
    background: var(--color-tertiary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
section{
    display:flex;
    gap:20px;
    margin:auto;
    animation: .8s zoom-in ease-out;
}
@keyframes zoom-in{
0% {
    scale: 0;
}

100% {
    scale: 1;
}}
.btn{
  display:inline-block;
  padding:.5rem;
  background-color:#343434;
  border-bottom: 2px solid #0b0b0b;
  border-radius: 5px;
  color:white;
  text-decoration: none;
}
.btn:active{
  border-bottom: 0px solid #0b0b0b;
  border-top: 2px solid #0b0b0b;
  margin-top:-2px;
  margin-bottom:2px;

}
.btn:disabled{
  pointer-events: none;
  
  
}
</style>
