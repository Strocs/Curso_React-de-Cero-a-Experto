import { create } from 'zustand'
import {
  registerUserWithEmailAndPassword,
  signInWithGoogle
} from '../firebase/providers'

export const useAuthStore = create((set, get) => ({
  userAuth: {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },

  login: ({ uid, email, displayName, photoURL }) =>
    set(() => ({
      userAuth: {
        status: 'authenticated',
        uid,
        email,
        displayName,
        photoURL,
        errorMessage: null
      }
    })),

  logout: (errorMessage) =>
    set(() => ({
      userAuth: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage
      }
    })),

  checkingCredentials: () =>
    set((state) => ({
      userAuth: {
        ...state.userAuth,
        status: 'checking'
      }
    })),

  startEmailAndPasswordSignIn: async (email, password) => {
    get().checkingCredentials()
  },

  startCreatingUserWithEmailAndPassword: async (userData) => {
    get().checkingCredentials()

    const resp = await registerUserWithEmailAndPassword(userData)

    if (!resp.ok) return get().logout(resp.errorMessage)

    get().login(resp)
  },

  startGoogleSignIn: async () => {
    get().checkingCredentials()

    const resp = await signInWithGoogle()

    if (!resp.ok) return get().logout(resp.errorMessage)

    get().login(resp)
  }
}))
