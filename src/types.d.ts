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
  teamName: string
  stats: null
  players: Player[]
}
interface Player {
  id: number
  username: string
  displayName: string
  type: 'unknown' | 'regular' | 'ironman' | 'hardcore' | 'ultimate'
  build: string
  status: string
  country: null
  patron: boolean
  exp: number
  ehp: number
  ehb: number
  ttm: number
  tt200m: number
  registeredAt: string
  updatedAt: string
  lastChangedAt: string
  lastImportedAt: null
}

interface Teams {
  [key: Team.teamName]: string
}

export { Tile, Team, Teams, Player }
