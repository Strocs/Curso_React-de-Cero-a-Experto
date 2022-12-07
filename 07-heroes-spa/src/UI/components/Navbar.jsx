import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const isActive = ({ isActive }) =>
    `nav-item nav-link ${isActive ? 'active' : ''}`

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink className={isActive} to='/marvel'>
            Marvel
          </NavLink>

          <NavLink className={isActive} to='/dc'>
            DC
          </NavLink>

          <NavLink className={isActive} to='/search'>
            Search
          </NavLink>

          {/* <NavLink className={isActive} to='/hero'>
            Hero
          </NavLink> */}
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary m-1'>Ignacio</span>

          <button onClick={onLogout} className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
