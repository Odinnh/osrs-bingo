function generateName(): string {
  let id = ''
  let adjectives = <string[]>[
    'visible',
    'clean',
    'elderly',
    'silly',
    'substantial',
    'ossified',
    'tiresome',
    'harmonious',
    'southern',
    'exciting',
    'critical',
    'oceanic',
    'fanatical',
    'macho',
    'wandering'
  ]
  let nouns = <string[]>[
    'tale',
    'year',
    'child',
    'art',
    'king',
    'beer',
    'news',
    'map',
    'breath',
    'soup',
    'meal',
    'mud',
    'loss',
    'mom',
    'speech'
  ]
  return (
    adjectives[Math.floor(Math.random() * adjectives.length)] +
    ' ' +
    nouns[Math.floor(Math.random() * nouns.length)]
  )
}

// Example usage
export { generateName }
