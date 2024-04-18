function tinyid(length: number = 4): string {
  let idLength = length
  let id = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < idLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return id
}

// Example usage
export { tinyid }
