import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useAuthStore } from '../stores/useAuthStore'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {
  const { status } = useAuthStore((state) => state.userAuth)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user)
    })
  }, [])

  if (status === 'checking') return <CheckingAuth />
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='auth/*' element={<AuthRoutes />} />
      {/* JournalApp */}
      <Route path='/*' element={<JournalRoutes />} />
    </Routes>
  )
}
