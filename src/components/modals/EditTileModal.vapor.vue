<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.localTileData">
			<div class="left-column">
				<div class="img-container">
					<img :src="props.localTileData!.image" />
					<input required type="url" v-model="props.localTileData.image" />
				</div>
				<tiptapEditor class="editable" v-model="props.localTileData.description" />

				<div>
					<h3 class="fs-4">Points</h3>
					<p>the points the competitors will get when they complete the tile</p>
					<label
						>points value:
						<input type="number" min="0" v-model="props.localTileData!.points"
					/></label>
					<label
						>Repeatable
						<input toggle type="checkbox" v-model="props.localTileData.repeatable" />
						{{ props.localTileData.repeatable }}</label
					>
				</div>
			</div>
			<div class="right-column">
				<h2 @click="focusOn('#title')" class="fs-1 title">
					<span
						ref="props.localTileData.title"
						contenteditable
						class="editable"
						spellcheck="false"
						@focus="isTitleEdit = true"
						@keydown.prevent.enter="
							(event) => {
								isTitleEdit = false
								validate(event)
							}
						"
						@blur.prevent="
							(event) => {
								isTitleEdit = false
								validate(event)
							}
						"
						name="title"
						id="title"
					>
						{{ props.localTileData.title }} </span
					><span icon class="pen fs-4">
						<font-awesome-icon :icon="['fas', 'pen']" />
					</span>
				</h2>
				<button submit @click="$emit('save')">Save changes</button>
				<button cancel @click="$emit('cancel')">Cancel</button>
				<button icon @click="$emit('delete')">delete</button>
				<small>
					tile id: <code>{{ props.localTileData?.id }}</code>
				</small>
				<div>
					<h3 class="fs-4">Tile type</h3>
					<VueMultiselect
						v-model="props.localTileData!.type"
						:options="['drop', 'exp', 'kc']"
						:close-on-select="true"
						:clear-on-select="false"
						:allow-empty="false"
					/>
				</div>
				<div v-if="['kc', 'exp'].includes(props.localTileData?.type)">
					<h3 class="fs-4">{{ countTitle }}</h3>
					<p>
						The required {{ props.localTileData.type }} per metric the competitors need
						to complete the tile
					</p>
					<div>
						<label class="drop-list-input"
							>{{ countText }}:
							<input type="number" min="0" v-model="props.localTileData!.count"
						/></label>
					</div>
				</div>
				<div v-if="props.localTileData?.type == 'drop'">
					<h3 class="fs-4">Drops</h3>
					<p>
						Add drops to the list of valid drops and configure the required amount.<br /><em
							>if none are set it defaults to target count</em
						>
					</p>
					<div>
						<label>
							Individual amount
							<input
								type="checkbox"
								toggle
								choice
								v-model="props.localTileData.needAny"
							/>
							Total amount
						</label>
					</div>
					<div>
						<label class="drop-list-input" v-if="props.localTileData?.needAny">
							Required amount:
							<input type="number" min="0" v-model="props.localTileData!.count"
						/></label>
					</div>
					<hr
						v-if="props.localTileData?.drops && props.localTileData?.drops.length > 0"
					/>
					<ul class="drop-list">
						<li v-for="drop in props.localTileData.drops">
							<div class="drop-row">
								<div class="drop-list-input">
									<p
										style="
											margin-left: 0;
											margin-right: auto;
											font-weight: bold;
										"
									>
										{{ drop.name }}
									</p>
									<small
										v-if="(drop.min || drop.max) && props.localTileData.needAny"
									>
										<template v-if="drop.min">min: {{ drop.min }}</template>
										<template v-if="drop.min && drop.max"> / </template>
										<template v-if="drop.max">max: {{ drop.max }}</template>
									</small>
									<div v-if="!props.localTileData.needAny">{{ drop.count }}x</div>
									<button icon outline @click="removeDropFromTile(drop)">
										delete
									</button>
								</div>
							</div>
						</li>
						<li>
							<div class="drop-list-input">
								Drop:
								<input
									type="text"
									v-model="newDropForTile.name"
									placeholder="Bandos tassets"
								/>
							</div>
							<template v-if="!props.localTileData.needAny">
								<div class="drop-list-input">
									Required ammount:
									<input type="number" v-model="newDropForTile.count" />
								</div>
							</template>
							<template v-else-if="props.localTileData.needAny">
								<div class="drop-list-input">
									Minimum needed:
									<input
										type="number"
										placeholder="unset"
										v-model="newDropForTile.min"
									/>
								</div>
								<div class="drop-list-input">
									Maximum allowed:
									<input
										type="number"
										placeholder="unset"
										v-model="newDropForTile.max"
									/>
								</div>
							</template>
							<button @click="addDropToTile">Add Drop</button>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="fs-4">Metric</h3>
					<p>Search and select the metric you want to associate with this tile.</p>

					<template v-if="props.localTileData?.type == 'drop'">
						<VueMultiselect
							:max="4"
							v-model="props.localTileData!.metric"
							:options="filteredMetrics"
							:multiple="true"
							:close-on-select="false"
							:clear-on-select="false"
							:preserve-search="true"
							:allow-empty="true"
							placeholder="Choose a metric to track progress"
						/>
					</template>
					<template v-if="props.localTileData?.type == 'kc'">
						<VueMultiselect
							:max="4"
							v-model="props.localTileData!.metric"
							:options="filteredKC"
							:multiple="true"
							:close-on-select="false"
							:clear-on-select="false"
							:preserve-search="true"
							:allow-empty="true"
							placeholder="Choose a metric to track progress"
						/>
					</template>
					<template v-if="props.localTileData?.type == 'exp'">
						<VueMultiselect
							:max="4"
							v-model="props.localTileData!.metric"
							:options="filteredSkills"
							:multiple="true"
							:close-on-select="false"
							:clear-on-select="false"
							:preserve-search="true"
							:allow-empty="true"
							placeholder="Choose a metric to track progress"
						/>
					</template>
				</div>
				<div
					v-if="
						['kc', 'exp'].includes(props.localTileData.type) &&
						props.localTileData.metric
					"
				>
					<template v-for="metric in props.localTileData.metric">
						<h3>{{ metric.replace('_', ' ') }}</h3>
						<p>
							<em
								>these are example values in edit mode, in view mode it will be with
								actual data</em
							>
						</p>
						<div class="spread">
							<progress
								min="0"
								:value="Math.random() * props.localTileData.count"
								:max="props.localTileData.count"
							></progress>
							<p>
								{{
									formatNumberToShort(
										Math.floor(Math.random() * props.localTileData.count)
									)
								}}
							</p>
						</div>
					</template>
				</div>
			</div>
		</div>
	</dialog>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { SKILLS, METRICS, BOSSES, ACTIVITIES } from '@wise-old-man/utils'
import tiptapEditor from '@/components/tiptapEditor.vapor.vue'
import VueMultiselect from 'vue-multiselect'

import type { ModalElement, Tile } from '@/types'
import { tinyid } from '@/assets/js/tinyid'
import { formatNumberToShort } from '@/assets/js/helpers'
import { modalClose } from '@/assets/js/modalClose'

const props = defineProps<{
	localTileData: Tile | null
}>()

const isTitleEdit = ref(false)
const dialog = ref<ModalElement>()

modalClose(dialog, () => {
	closeModal()
})
const newDropForTile = ref({
	name: '',
	count: 0,
	min: 0,
	max: 0
})

const countText = computed((): string => {
	if (props.localTileData?.type == 'drop') {
		return 'Total Count'
	}
	return 'Required ' + props.localTileData!.type
})
const countTitle = computed(() => {
	if (props.localTileData?.type == 'drop') {
		return 'Drop Count'
	}
	return 'Required ' + props.localTileData!.type
})

const addDropToTile = (): void => {
	if (props.localTileData && ![undefined, ''].includes(newDropForTile.value.name)) {
		if (props.localTileData.drops) {
			props.localTileData.drops.push({
				id: tinyid(),
				...newDropForTile.value
			}) as unknown as Tile['drops']
		} else {
			props.localTileData.drops = [{ id: tinyid(), ...newDropForTile.value }]
		}
		newDropForTile.value.count = 0
		newDropForTile.value.min = 0
		newDropForTile.value.max = 0
	}
}
const removeDropFromTile = (drop: { id: string; name: string; count: number }): void => {
	if (
		props.localTileData &&
		props.localTileData.drops &&
		props.localTileData.drops.indexOf(drop) > -1
	) {
		props.localTileData.drops.splice(props.localTileData.drops.indexOf(drop), 1)
	}
}
// metrics filtering
const bannedMetrics = ref(['ehb', 'ehp', 'league_points', 'overall'])
const filteredActivities = ref(ACTIVITIES.filter((metric) => !bannedMetrics.value.includes(metric)))
const filteredSkills = ref(SKILLS.filter((metric) => !['overall'].includes(metric)))
const filteredMetrics = ref(METRICS.filter((metric) => !bannedMetrics.value.includes(metric)))
const filteredKC = ref([...BOSSES, ...filteredActivities.value])

const showModal = () => {
	if (dialog.value) {
		dialog.value.showModal()
	}
}

const closeModal = () => {
	if (dialog.value) {
		newDropForTile.value.name = ''
		dialog.value.close()
	}
}
defineExpose({
	showModal,
	closeModal
})
const focusOn = (el: any) => {
	document.querySelector(el).focus()
}

const validate = (event: any) => {
	if ([undefined, ''].includes(event.target.innerHTML)) {
		event.target.innerHTML = 'Please enter a title...'
	}
	props.localTileData!.title = event.target.innerHTML
}
const emits = defineEmits(['save', 'cancel', 'delete'])
</script>
<style scoped>
dialog {
	width: 800px;
}
dialog > div {
	display: grid;
	grid-template-columns: 0.3fr 0.7fr;
	gap: var(--gap);
}
dialog img {
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: contain;
	padding: 5px;
	border: 1px solid var(--color-background__inv);
	border-radius: var(--border-radius);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
dialog img + [type='url'] {
	width: 100%;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-top-color: transparent;
}
.img-container {
	display: flex;
	flex-direction: column;
}
.left-column {
	display: flex;
	flex-direction: column;
	gap: var(--gap);
}

.title span {
	outline: unset;
	border: 1px solid transparent;
	display: inline-block;
	word-break: break-word;
	&:focus-within {
		border: 1px solid var(--color-background__inv);
		border-radius: var(--border-radius);
	}
}
.drop-list {
	list-style-type: none;
	margin: inherit;
	padding: inherit;
	padding-block: unset;
}

.right-column {
	width: 100%;
}
.spread {
	width: 100%;
	display: flex;
	width: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	gap: var(--gap);
	& p {
		width: 4ch;
		display: inline-block;
	}
}
.drop-list-input {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--gap);
}
</style>
