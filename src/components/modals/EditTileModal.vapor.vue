<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.localTileData">
			<div class="left-column">
				<div class="img-container">
					<img :src="props.localTileData!.image" />
					<input required type="url" v-model="props.localTileData.image" />
				</div>
				<tiptapEditor class="editable" v-model="props.localTileData.description" />
			</div>
			<div>
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
				<small
					><code>{{ props.localTileData?.id }}</code></small
				>
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
				<div v-if="props.localTileData?.type == 'drop'">
					<h3 class="fs-4">Drops</h3>
					<p>
						Add drops to the list of valid drops and configure the required amount.<br /><em
							>if none are set it defaults to target count</em
						>
					</p>
					<label>
						Individual count
						<input
							type="checkbox"
							toggle
							choice
							v-model="props.localTileData.needAny"
						/>
						Total count
					</label>
					<ul class="drop-list">
						<li v-for="drop in props.localTileData.drops">
							{{ drop }}
							<button icon outline @click="removeDropFromTile(drop)">delete</button>
						</li>
						<li>
							<input type="text" v-model="newDropForTile" />
							<button @click="addDropToTile">Add Drop</button>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h3 class="fs-4">Metric</h3>
				<p>Search and select the metric you want to associate with this tile.</p>

				<template v-if="props.localTileData?.type == 'drop'">
					<VueMultiselect
						:max="3"
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
						:max="3"
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
						:max="3"
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
			<div v-if="props.localTileData">
				<h3 class="font-size-S">Repeatable tile</h3>
				<p>
					Can the competitors complete the tile multiple times and gain points each time?
				</p>
				<label
					>Repeatable
					<input toggle type="checkbox" v-model="props.localTileData.repeatable" />
					{{ props.localTileData.repeatable }}</label
				>
			</div>
			<div>
				<h3 class="font-size-S">Points and count</h3>
				<p>the points the competitors will get when they complete the tile</p>
				<label
					>points value:
					<input type="number" min="0" v-model="props.localTileData!.points"
				/></label>
				<p>
					amount that is needed to complete the tile <br /><em
						>a.e. 200.000.000 slayer exp or 5 unique barrows items</em
					>
				</p>
				<label
					>count: <input type="number" min="0" v-model="props.localTileData!.count"
				/></label>

				<p>
					this is the minimum required amount for the tile<br />
					<em
						>a.e. if the count is 5 and you want the team to collect at least one of
						each item, the minimum would be 1</em
					>
				</p>
				<label
					>minimum count:
					<input
						placeholder="unset"
						type="number"
						min="0"
						v-if="props.localTileData !== null"
						@blur="
							() => {
								if (!props.localTileData) return

								if (props.localTileData.min == undefined) {
									return
								}
								props.localTileData.min =
									props.localTileData.min < 0 ? 0 : props.localTileData.min
							}
						"
						v-model="props.localTileData.min"
				/></label>
				<p>
					this is the maximum amount for the tile<br />
					<em
						>a.e. if the count is 5 and you want the team to collect at most two of each
						item, the maximum would be 2</em
					>
				</p>
				<label
					>maximum count:
					<input
						placeholder="unset"
						type="number"
						min="0"
						@blur="
							() => {
								if (!props.localTileData) return
								if (props.localTileData.max == undefined) {
									return
								}
								props.localTileData.max =
									props.localTileData.max < 0 ? 0 : props.localTileData.max
							}
						"
						v-model="props.localTileData!.max"
				/></label>
			</div>
			<template v-if="props.localTileData?.type == 'drop'"> </template>

			<!-- a checkbox that toggles between AND or OR using props.localTileData>selector-->
			<div v-if="props.localTileData && props.localTileData.needAny.toString()">
				<h3 class="fs-4">Need Any or All?</h3>
				<p>
					do the competors need to achieve all of the requirements to complete the tile?
				</p>
			</div>
		</div>
		<button submit @click="$emit('save')">Save changes</button>
		<button outline @click="$emit('cancel')">Cancel</button>
	</dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { SKILLS, METRICS, BOSSES } from '@wise-old-man/utils'
import tiptapEditor from '@/components/tiptapEditor.vapor.vue'
import VueMultiselect from 'vue-multiselect'

import type { ModalElement, Tile } from '@/types'
import { tinyid } from '@/assets/js/tinyid'

const props = defineProps<{
	localTileData: Tile | null
}>()

const isTitleEdit = ref(false)
const dialog = ref<ModalElement>()
const newDropForTile = ref<string>('')

const addDropToTile = (): void => {
	if (props.localTileData && ![undefined, ''].includes(newDropForTile.value)) {
		if (props.localTileData.drops) {
			props.localTileData.drops.push({
				id: tinyid(),
				name: newDropForTile.value
			}) as unknown as Tile['drops']
		} else {
			props.localTileData.drops = [{ id: tinyid(), name: newDropForTile.value }]
		}
	}
}
const removeDropFromTile = (drop: { id: string; name: string }): void => {
	if (
		props.localTileData &&
		props.localTileData.drops &&
		props.localTileData.drops.indexOf(drop) > -1
	) {
		props.localTileData.drops.splice(props.localTileData.drops.indexOf(drop), 1)
	}
}
// metrics filtering
const filteredKC = ref(BOSSES)
const filteredSkills = ref(SKILLS.filter((metric) => !['overall'].includes(metric)))
const filteredMetrics = ref(
	METRICS.filter((metric) => !['ehb', 'ehp', 'league_points', 'overall'].includes(metric))
)

const showModal = () => {
	if (dialog.value) {
		dialog.value.showModal()
	}
}

const closeModal = () => {
	if (dialog.value) {
		newDropForTile.value = ''
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
const emits = defineEmits(['save', 'cancel'])
</script>
<style scoped>
dialog {
	width: 800px;
}
dialog > div {
	display: grid;
	grid-template-columns: 33% 67%;
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
}
</style>
