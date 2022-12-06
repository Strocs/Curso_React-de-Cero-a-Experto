import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const isActive = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            useContext
          </Link>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink className={isActive} to='/'>
                Home
              </NavLink>
              <NavLink className={isActive} to='/about'>
                About
              </NavLink>
              <NavLink className={isActive} to='/login'>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
