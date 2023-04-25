import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env['VITE_API_KEY'],
  authDomain: import.meta.env['VITE_AUTH_DOMAIN'],
  databaseURL: import.meta.env['VITE_DATABASE_URL'],
  projectId: import.meta.env['VITE_PROJECT_ID'],
  storageBucket: import.meta.env['VITE_STORAGE_BUCKET'],
  messagingSenderId: import.meta.env['VITE_MESSAGING_SENDER_ID'],
  appId: import.meta.env['VITE_APP_ID'],
  measurementId: import.meta.env['VITE_MEASUREMENT_ID']
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
// here we can export reusable database references
export const todosRef = collection(db, 'todos')
