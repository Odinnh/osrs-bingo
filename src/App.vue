<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <RouterView :key="route.fullPath" />
  </div>
</template>

<style>
:root {
  --color-verifying: rgb(249, 191, 83, 10%);
  --color-collected: rgb(83, 249, 93, 10%);
  --color-primary: #d9d9d9;
  --color-secondairy: #212529;
  --color-tertiary: #171a1c;
  --color-accent: #fab005;
  --border-radius: 5px;
  --border: 1px solid #d9d9d940;
  /* --border: none; */

  --text-color: var(--color-primary);
  --text-alt: var(--color-accent);

  --background-color: var(--color-secondairy);
}
body {
  background: var(--color-tertiary);
  color: var(--color-primary);
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-block: 50px;
}

.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 249px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: var(--border-radius);
  padding: 5px 0;
  position: absolute;
  z-index: 2000;
  top: 25px;
  left: 50%;
  margin-left: -124px;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 15px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.container {
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
.main-section {
  align-items: flex-start;
}

.btn {
  display: inline-block;
  padding: 0.5rem;
  background-color: #343434;
  border: none;
  border-bottom: 2px solid #0b0b0b;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  text-decoration: none;
}
.btn.danger {
  background-color: #ff3359;
  border: none;
  border-bottom: 2px solid #0b0b0b;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  text-decoration: none;
}
.btn.close {
  color: #ff3359;
  font-weight: bolder;
  font-size: 1.3rem;
  line-height: 0.2rem;
  aspect-ratio: 1/1.2;
  text-align: center;
  padding-top: 3px;
}
.btn.dashboard {
  display: block;
  position: absolute;
  top: 25px;
  left: 25px;
}

.btn:active {
  border-bottom: 0px solid #0b0b0b;
  border-top: 2px solid #0b0b0b;
  margin-top: -2px;
  margin-bottom: 2px;
}

.btn:disabled {
  pointer-events: none;
  color: black;
}

input[type='text'],
input[type='number'] {
  display: inline-block;
  padding: 0.5rem;
  background-color: #343434;
  border: none;
  border-top: 2px solid #0b0b0b;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  text-decoration: none;
}
input[type='text'].danger,
input[type='number'].danger {
  border: var(--border);
  border-color: #ff3359;
  color: #ff3359;
  font-weight: bold;
}
span.danger {
  color: #ff3359;
  font-weight: bold;
}
/* TODO: change this soit */
/* img {
  filter: sepia(100%) contrast(80%) hue-rotate(1010deg) saturate(200%);
}
.isCollected img {
  filter: unset;
} */

@media only screen and (max-width: 940px) {
  .main-section {
    flex-direction: column !important;
    align-items: center;
  }
  .main-section {
    width: 90% !important;
  }
  .scoreCard ul {
    padding-left: 0;
  }
  .container {
    width: 100%;
  }
  .bingo-board .tileFlag {
    --width: 14px !important;
    font-size: 0.5rem;
  }
  .main-section > * {
    width: 100% !important;
  }
}
.menu-items {
  position: absolute;
  pointer-events: fill;
}
.menu-items .__top {
  position: absolute;
  top: 20;
}
.toggle {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  position: relative;
  outline: none;
  width: 50px;
  height: 30px;
  background-color: #ff3359;
  border-radius: 50px;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background-color: var(--color-tertiary);
  border-radius: 50%;
  transition: 100ms;
}

.toggle:checked {
  background-color: #33ff58;
}

.toggle:hover::after {
  top: 1px;
}

.toggle:checked::after {
  left: 24px;
  transition: 100ms;
}
</style>
