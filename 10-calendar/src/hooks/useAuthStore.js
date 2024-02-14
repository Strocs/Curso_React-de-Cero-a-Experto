import { useDispatch, useSelector } from 'react-redux'
import calendarApi from '../api/calendarApi'
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout
} from '../store/auth/authSlice'

// Alternativa a la utilización de thunks para manejar eventos asíncronos

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    // Estado de carga
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      // guardar token y fecha del token en local storage
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      // guardar en el estado los datos del login
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      // limpiar
      dispatch(onLogout('Wrong credentials'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking())

    try {
      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || 'User already exist.'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    dispatch(onChecking())

    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await calendarApi.get('auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
  }

  return {
    // Props
    status,
    user,
    errorMessage,
    // Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
