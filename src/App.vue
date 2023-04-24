<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'board-view', }">home</RouterLink> | 
    <RouterLink :to="{ name: 'private-board', params: { id: '1' } }">team 1</RouterLink> | 
    <RouterLink :to="{ name: 'private-board', params: { id: '2' } }">team 2</RouterLink>
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
</style>
