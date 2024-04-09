<template>
  <header>
    <nav>
      <a
        class="btn"
        :current="route.name == 'Home'"
        icon
        @click.prevent="router.push({ name: 'Home' })"
        >home</a
      >
      <a
        class="btn"
        :current="route.name == 'loginScreen'"
        icon
        @click.prevent="router.push({ name: 'loginScreen' })"
        >person</a
      >
      <a
        v-if="user"
        class="imgbtn"
        :current="route.name == 'loginScreen'"
        @click.prevent="router.push({ name: 'loginScreen' })"
      >
        <img class="bobble" v-if="user.photoURL" :src="user.photoURL" />
      </a>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useCurrentUser } from 'vuefire'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const user = useCurrentUser()
</script>
<style scoped>
.bobble {
  aspect-ratio: 1/1;
  width: 4rem;
  object-fit: cover;
  border-radius: 100vw;
  --color: var(--primary-500);
  &:hover {
    border-color: color-mix(in srgb, var(--color) 70%, var(--background));
    border-width: 3px;
    border-style: solid;
    border-radius: 100vw;
  }
  &:active {
    border-color: color-mix(in srgb, var(--color) 30%, var(--background));

    border-width: 5px;
  }
}
[current='true'] {
  & .bobble {
    --color: var(--accent);
    pointer-events: none;
    border-width: 3px;
    border-style: solid;
    border-radius: 100vw;
  }
}
.imgbtn {
  padding: 0;
  margin: 0;
  width: 4rem;
  height: 4rem;
  background-color: var(--background-100);
  display: inline-flex;
  border-radius: 100vw;
}
nav {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}
</style>
