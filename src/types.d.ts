import { Prisma_Base_Player } from '@wise-old-man/utils'

interface Tile extends DocumentData {
	id: string
	title: string
	description: string
	image: string
	type: 'drop' | 'exp' | 'kc'
	metric?: string[]
	repeatable?: boolean
	needAny: boolean
	points: number
	count: number
	min?: number | undefined
	max?: number | undefined
	drops?: [
		{
			count: number
			id: string
			name: string
			min?: number
			max?: number
		}
	]
	collected?: collectionLogItem[]
	verified?: [
		{
			teamName: string
			timestamp: timestamp | number
		}
	]
}
interface Tiles {
	[key: string]: Tile
}
interface collectionLogItem {
	playerName: string
	timestamp: timestamp | number
	teamName: string
	id: string
}

interface Team {
	teamName: string
	stats: null
	players: Prisma_Base_Player[]
	icon?: string
}
type Player = Omit<Prisma_Base_Player, 'ehb' | 'ehp' | 'exp'>

interface Teams {
	[key: string]: Team
}
interface ModalElement extends HTMLDialogElement {
	//closes the Modal
	closeModal: Function
}
export { Tile, Tiles, Team, Teams, Player, ModalElement, collectionLogItem }
