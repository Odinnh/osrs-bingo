import { ref } from 'vue'

const formatNumberToShort = (number: number): string => {
	const nmbr = ref(number)

	const abbreviations = ['k', 'm']

	for (let i = abbreviations.length - 1; i >= 0; i--) {
		const unit = 1000 ** (i + 1)
		if (nmbr.value >= unit) {
			const formatted = nmbr.value / unit
			let result = formatted.toFixed(2).replace(/\.?0+$/, '')
			if (result.length > 4) {
				result = result.slice(0, 4)
			}
			return result + abbreviations[i]
		}
	}

	return nmbr.value.toString()
}

export { formatNumberToShort }
