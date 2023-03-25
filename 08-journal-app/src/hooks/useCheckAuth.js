import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { FirebaseAuth } from '../firebase/config'
import { useJournalStore } from '../stores'
import { useAuthStore } from '../stores/useAuthStore'

export const useCheckAuth = () => {
  const { status } = useAuthStore((state) => state.userAuth)
  const logout = useAuthStore((state) => state.logout)
  const login = useAuthStore((state) => state.login)
  const setNotes = useJournalStore((state) => state.setNotes)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return logout()
      login(user)
      setNotes()
    })
  }, [])
  return status
}
