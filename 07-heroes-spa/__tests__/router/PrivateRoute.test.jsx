import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, test, vi } from 'vitest'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router/PrivateRoute'

describe('Tests on <PrivateRoute />', () => {
  test('should display the private page if user is authenticated', () => {
    const contextValue = {
      logged: true
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Private Page Displayed</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Private Page Displayed')).toBeTruthy()
  })

  test('should navigate to login (same page) if user is`nt authenticated', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<PrivateRoute />} />
            <Route path='/login' element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Login Page')).toBeTruthy()
  })

  test('should get called localStorage.setItem with two args, lastPath and the latest path url', () => {
    Storage.prototype.setItem = vi.fn()

    const contextValue = {
      logged: true
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Private Page Displayed</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(localStorage.setItem).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    )
  })
})
