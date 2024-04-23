import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWebsitePreferenceStore = defineStore('WebsitePreferences', () => {
	const colorScheme = ref<string>('light_mode')

	const currentTheme = localStorage.getItem('theme')
	if (currentTheme) {
		colorScheme.value = currentTheme
	}

	function switchColorSceme(): void {
		colorScheme.value = colorScheme.value == 'light_mode' ? 'dark_mode' : 'light_mode'
		localStorage.setItem('theme', colorScheme.value)
	}
	return { colorScheme, switchColorSceme }
})
