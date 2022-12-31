import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, test, vi } from 'vitest'
import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/UI'

//mocking useNavigate
const mockedNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  //grab all functionalities and just mock useNavigate
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => mockedNavigate }
})

describe('tests on <NavBar />', () => {
  const userName = 'Ignacio Andrés'

  const contextValue = {
    logged: true,
    user: {
      name: userName
    },
    logout: vi.fn()
  }

  test('should display user name on navbar', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText(userName)).toBeTruthy()
  })

  test('should been called logout() and navigate when button has clicked', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    const buttonEl = screen.getByText('Logout')
    fireEvent.click(buttonEl)

    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedNavigate).toHaveBeenCalledWith('/login', {
      replace: true
    })
  })
})
