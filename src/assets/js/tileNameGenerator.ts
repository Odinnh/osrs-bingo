function generateName(): string {
  let prefix = <string[]>[
    'Bal',
    'Bar',
    'Dal',
    'Dar',
    'Den',
    'Dok',
    'Jar',
    'Jik',
    'Lar',
    'Rak',
    'Ral',
    'Ril',
    'Sig',
    'Tal',
    'Thor',
    'Ton'
  ]
  let suffix = <string[]>[
    'dar',
    'dor',
    'dur',
    'kal',
    'kar',
    'kir',
    'kur',
    'lah',
    'lak',
    'lim',
    'lor',
    'rak',
    'tin',
    'ton',
    'tor',
    'vald'
  ]
  let title = <string[]>['Rockcrusher', 'Spinewielder', 'Skullbearer', 'Dräpare']
  return (
    prefix[Math.floor(Math.random() * prefix.length)] +
    suffix[Math.floor(Math.random() * suffix.length)] +
    ' ' +
    title[Math.floor(Math.random() * title.length)]
  )
}

// Example usage
export { generateName }
