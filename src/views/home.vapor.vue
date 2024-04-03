<template>
  <h1 class="font-size-H">Bingo <em>Bongo</em></h1>
  <h2 class="font-size-L">Simplifying OSRS Clan Bingos</h2>
  <div class="col-2">
    <div class="ghost-board">
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
    </div>
    <div>
      <h2>No more spreadsheets</h2>
      <p>
        You know how annoying it is to keep track of scores during clan bingos, right? Yeah, it's a
        pain.
      </p>
      <p>
        No more dealing with spreadsheets or scribbling down scores - Bingo Bongo has got my back on
        that front. It's like having a reliable sidekick for our clan events, making everything run
        smoothly and keeping the stress levels down.
      </p>
      <a class="btn big" submit @click="router.push({ name: 'createNewBingo' })"
        >Start a new event!</a
      >
    </div>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style></style>
<style scoped>
.ghost-board {
  flex-shrink: 0;
  display: grid;
  align-self: flex-start;
  width: 180px;
  gap: 5px;
  padding: 8px;
  aspect-ratio: 1;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--background-alt);
  border-radius: var(--border-radius);
  & .tile {
    background-color: var(--primary-500);
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: var(--border-radius);
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(8) {
      background-color: var(--secondary-100);
    }
  }
}
.col-2 {
  gap: 20px;
  display: flex;
}
section {
  min-height: max-content;
}
</style>
