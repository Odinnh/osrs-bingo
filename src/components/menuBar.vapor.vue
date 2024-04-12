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
import { getCurrentUser } from 'vuefire'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const user = await getCurrentUser()
</script>
<style scoped></style>
