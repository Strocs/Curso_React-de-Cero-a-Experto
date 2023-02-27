import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      // User Info
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid, photoURL } = result.user
    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      // User Info
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )

    const { displayName, photoURL, uid } = result.user

    return {
      ok: true,
      // User Info
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}
