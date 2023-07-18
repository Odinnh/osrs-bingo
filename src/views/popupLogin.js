import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseSettings'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const provider = new GoogleAuthProvider()
const auth = useFirebaseAuth()

export const popupLogin = async (destination, router) => {
  signInWithPopup(auth, provider)
    .then(async (response) => {
      const user = response.user
      const docRef = await getDoc(doc(db, 'Users', user.uid))
      if (!docRef.exists()) {
        setDoc(doc(db, 'Users', user.uid), {
          count: 0
        })
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
