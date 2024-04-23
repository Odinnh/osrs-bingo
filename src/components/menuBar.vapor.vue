<template>
	<header>
		<nav>
			<router-link :to="{ name: 'Home' }" class="btn" icon :current="route.name == 'Home'">
				home
			</router-link>
			<router-link
				:to="{ name: 'Boards' }"
				class="btn"
				icon
				:current="route.name == 'Boards'"
			>
				apps
			</router-link>
			<a
				icon
				@click.prevent="switchColorSceme"
				:current="route.name == 'loginScreen'"
				class="btn"
				:class="darkModeIcon"
				v-html="darkModeIcon"
			></a>
			<router-link
				:to="{ name: 'loginScreen' }"
				:current="route.name == 'loginScreen'"
				class="btn"
			>
				account
			</router-link>
			<router-link
				:to="{ name: 'loginScreen' }"
				:current="route.name == 'loginScreen'"
				class="imgbtn"
			>
				<img class="bobble" v-if="user?.photoURL" :src="user?.photoURL" />
			</router-link>
		</nav>
	</header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentUser } from 'vuefire'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useWebsitePreferenceStore } from '@/stores/websitePreferences'
const route = useRoute()
const user = await getCurrentUser()
const websitePreferences = storeToRefs(useWebsitePreferenceStore())
const darkModeIcon = ref(websitePreferences.colorScheme)
const switchColorSceme = () => useWebsitePreferenceStore().switchColorSceme()
</script>
<style scoped>
nav {
	width: 100%;
	display: flex;
	align-items: center;
	gap: var(--gap);
}
.bobble {
	object-fit: cover;
	border-radius: 100vw;
	height: 100%;
}
.imgbtn {
	cursor: pointer;
	height: 5rem;
	aspect-ratio: 1/1;
	display: block;
	border-radius: 100vw;
	text-decoration: none;
	text-underline-offset: 0;

	position: relative;
	background-color: var(--color-background);
	&:hover {
		outline: 2px solid var(--color-background);
		outline-offset: -5px;
	}
	&::after {
		content: ' ';
		width: 100%;
		height: 100%;
		border-radius: 100vw;
		position: absolute;
		outline: 1.5px solid var(--color-background__inv);
		outline-offset: -1px;
		inset: 0;
	}
}
nav a:nth-last-of-type(2) {
	margin-left: auto;
	padding-right: 3.5rem;
	margin-right: -3.5rem;
}
nav:has(a:nth-last-of-type(2):hover) a:nth-last-of-type(1) {
	outline: 2px solid var(--color-background);
	outline-offset: -5px;
}
nav:has(a:nth-last-of-type(1):hover) a:nth-last-of-type(2) {
	color: var(--color-text);
	background-color: var(--color-background);
}
</style>
