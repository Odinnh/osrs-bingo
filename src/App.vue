<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'private-board', params: { id: '1' } }"><h1>osrs bingo</h1></RouterLink>
  </header>
  
  <section>
    <RouterView />
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
