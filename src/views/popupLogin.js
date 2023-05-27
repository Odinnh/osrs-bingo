import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseSettings'

const provider = new GoogleAuthProvider()
const auth = getAuth()

export const popupLogin = async (destination, router, userStateStore) => {
  signInWithPopup(auth, provider)
    .then((response) => {
      userStateStore.setUser({
        loggedIn: true,
        data: response.user
      })
    })
    .then(async () => {
      const docRef = await getDoc(doc(db, 'Users', userStateStore.user.data.uid))
      if (!docRef.exists()) {
        setDoc(doc(db, 'Users', userStateStore.user.data.uid), {
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
