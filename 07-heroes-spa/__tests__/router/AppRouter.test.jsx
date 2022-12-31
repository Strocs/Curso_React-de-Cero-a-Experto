import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router/AppRouter'

describe('tests on <AppRouter />', () => {
  test('should display login page if not authenticated', () => {
    const contextValue = {
      logged: false
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Login')).toBeTruthy()
  })

  test('should display Marvel Page if user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Ignacio',
        id: '1'
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    
    expect(screen.getByText('Marvel Comics')).toBeTruthy()
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
})
