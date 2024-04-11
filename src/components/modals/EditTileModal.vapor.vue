<template>
	<dialog class="modal" ref="dialog">
		<div v-if="props.localTileData">
			<div>
				<h2>
					Edit tile: {{ props.localTileData?.title }}
					<small
						><code>{{ props.localTileData?.id }}</code></small
					>
				</h2>
				<input type="text" v-model="props.localTileData!.title" />
				<h3 class="font-size-S">Description</h3>
				<tiptapEditor class="editable" v-model="props.localTileData.description" />
			</div>
			<div>
				<h3 class="font-size-S">Image</h3>
				<img :src="props.localTileData!.image" />
				<br />
				<label
					>Image URL: <input required type="url" v-model="props.localTileData.image"
				/></label>
			</div>
			<div>
				<h3 class="font-size-S">Tile type</h3>
				<p>Choose any of the different tile types.</p>
				<VueMultiselect
					v-model="props.localTileData!.type"
					:options="['drop', 'exp', 'kc']"
					:close-on-select="true"
					:clear-on-select="false"
					:allow-empty="true"
					placeholder="Choose a tile Type"
				/>
			</div>
			<hr />
			<div>
				<h3 class="font-size-S">Metric</h3>
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
			<hr />
			<div v-if="props.localTileData">
				<h3 class="font-size-S">Repeatable tile</h3>
				<p>
					Can the competitors complete the tile multiple times and gain points each time?
				</p>
				<label
					>Repeatable <input type="checkbox" v-model="props.localTileData.repeatable" />
					{{ props.localTileData.repeatable }}</label
				>
			</div>
			<hr />
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
			<template v-if="props.localTileData?.type == 'drop'">
				<hr />
			</template>
			<div v-if="props.localTileData?.type == 'drop'">
				<h3 class="font-size-S">Drops</h3>
				<p>add drops to the list of valid drops</p>
				<ul>
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

			<!-- a checkbox that toggles between AND or OR using props.localTileData>selector-->
			<div v-if="props.localTileData && props.localTileData.needAny.toString()">
				<h3 class="font-size-S">Need Any or All?</h3>
				<p>
					do the competors need to achieve all of the requirements to complete the tile?
				</p>
				<label
					>All<input
						type="checkbox"
						choice
						v-model="props.localTileData.needAny"
					/>Any</label
				>
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

const dialog = ref<ModalElement>()
const newDropForTile = ref<string>('')

const addDropToTile = (): void => {
	if (props.localTileData) {
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
const emits = defineEmits(['save', 'cancel'])
</script>
<style scoped>
.modal {
	width: 60ch;
	max-width: 1000px;
	position: relative;
	& img {
		background-color: var(--background);
		width: 15ch;
		aspect-ratio: 1/1;
		object-fit: contain;
		padding: 20px;
		border-radius: var(--border-radius);
	}
	.close-modal {
		top: 20px;
		right: 20px;
		position: absolute;
		--color: var(--secondary);
		color: var(--dark);
		font-weight: bold;
	}
}
</style>
