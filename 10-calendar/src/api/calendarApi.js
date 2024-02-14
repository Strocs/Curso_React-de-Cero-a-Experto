import axios from 'axios'
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
  baseURL: VITE_API_URL
})

// Cada vez que se haga un request se intercepta para renovar el jwt
calendarApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config
})

export default calendarApi
