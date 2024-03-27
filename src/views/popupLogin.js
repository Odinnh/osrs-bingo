import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseSettings'
import { useFirebaseAuth } from 'vuefire'

const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()
const popupLogin = async (destination, router) => {
  signInWithPopup(auth, provider)
    .then(async (response) => {
      const user = response.user
      const docRef = await getDoc(doc(db, 'Users', user.uid))
      if (!docRef.exists()) {
        setDoc(doc(db, 'Users', user.uid), {})
      }
      router.push(destination)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error(error, errorCode, errorMessage)
    })
}
const signOutFromApp = async (router) => {
  signOut(auth).then(() => router.push({ path: '/' }))
}
export { popupLogin, signOutFromApp }
