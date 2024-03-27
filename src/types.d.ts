import { Prisma_Base_Player } from '@wise-old-man/utils'

interface Tile {
  id: string
  title: string
  description: string
  image: string
  type: 'drop' | 'exp' | 'kc'
  metric?: string[]
  repeatable?: boolean
  selector: 'OR' | 'AND'
  points: number
  count: number
  min?: number
  max?: number
  drops?: string[]
  collected?: collectionLogItem[]
  status?: 'DELETEME' | null
}
interface CollectedLogItem {
  id: number
  timeOfCollection: timestamp | number
  teamName: string
}

interface Team {
  teamName: string | null
  stats: null
  players: Player[]
}
interface Player extends Prisma_Base_Player {}

interface Teams {
  [key: string]: Team
}

export { Tile, Team, Teams, Player }
