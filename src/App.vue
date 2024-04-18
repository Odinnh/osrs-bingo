<script setup lang="ts">
import menuBar from '@/components/menuBar.vapor.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
	<suspense>
		<menuBar />
	</suspense>
	<suspense>
		<RouterView :key="route.fullPath" />
	</suspense>
</template>

<style>
@import url('./assets/root.css');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
</style>
