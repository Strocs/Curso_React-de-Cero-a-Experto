import { useAuthStore } from '../../hooks'

export const Navbar = () => {
  const { startLogout, user } = useAuthStore()

  const onLogout = event => {
    event.preventDefault()
    startLogout()
  }

  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt'></i>
        &nbsp; {user.name}
      </span>

      <button onClick={onLogout} className='btn btn-outline-danger'>
        <i className='fas fa-sign-out-alt'></i>
        <span className='pl-2'>Salir</span>
      </button>
    </div>
  )
}
