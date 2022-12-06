import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, AboutPage } from './'
import { UserProvider } from './context/UserProvider'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />

        {/* <Route path='/*' element={<LoginPage />} /> */}
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  )
}
