import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <h2>HomePage {user?.name}</h2>
      <hr />

      <pre aria-label='pre'>{JSON.stringify(user, null, 3)}</pre>
    </>
  )
}
