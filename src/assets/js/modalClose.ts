import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
const modalClose = (targetRef: Ref<HTMLDialogElement | undefined>, callback: Function) => {
	function closeModal(event: any) {
		// 	targetRef && targetRef.value && !targetRef.value.contains(event.target) && callback()
		// }
		// function closeM(event) {
		const rect = targetRef.value?.getBoundingClientRect()
		if (rect) {
			const isInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width
			if (!isInDialog) {
				callback()
			}
		}
	}
	onMounted(() => {
		document.addEventListener('mousedown', closeModal)
	}),
		onUnmounted(() => {
			document.removeEventListener('mousedown', closeModal)
		})
}
export { modalClose }
