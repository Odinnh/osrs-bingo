/**
 * @typedef {Object} Tile
 * @property {'exp'|'drop'|'kc'} type - The type of the tile.
 * @property {string} title - The title of the tile.
 * @property {string} description - Description of the tile.
 * @property {'AND' | 'OR'} selector - Selection method.
 * @property {number} points - Points awarded.
 * @property {number} count - The number they need to achieve for the tile to be completed
 * @property {string[]} [drops] - List of items dropped.
 * @property {number} [min] - minimum required count for the tile to be ellegible
 * @property {number} [max] - maximum allowed count for the tile to be ellegible, more will be null
 * @property {boolean} [repeatable] - Whether the tile is repeatable or not.
 * @property {string[]} [metric] - Metrics associated with the tile.
 * @property {Array<{ playerID: PlayerID, timeOfCollection: TimeOfCollection, groupID: GroupID}>} [collected] - Array of collected data.
 * @typedef {number} PlayerID - the ID of the player
 * @typedef {number | string} GroupID - the ID of the group the group
 * @typedef {number} TimeOfCollection - the moment the tile is verified
 */

/**
 * @type {Tile}
 */
const tile1 = {
  type: 'drop',
  title: 'this tile',
  repeatable: false,
  description: 'Go do this and make sure you dont do this...',
  drops: ['itemA', 'itemB', 'itemC', 'itemD'],
  selector: 'OR',
  count: 5,
  min: 1,
  max: 2,
  points: 1,
  metric: ['chambers_of_xeric', 'tombs_of_amascut', 'theather_of_blood'],
  collected: [
    { playerID: 1234, groupID: 'a1', timeOfCollection: 1234567890 },
    { playerID: 1234, groupID: 'a1', timeOfCollection: 2354215122 },
    { playerID: 5678, groupID: 'b2', timeOfCollection: 3456789012 }
  ]
}
tile1.collected.push({ playerID: 9012, groupID: 'a1', timeOfCollection: 4567890123 })
console.log(tile1)