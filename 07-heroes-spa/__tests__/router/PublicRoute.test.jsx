import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, test } from 'vitest'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'

describe('tests on <PublicRoute />', () => {
  test('should display children if not authenticated', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route Displayed</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Public Route Displayed')).toBeTruthy()
  })

  test('should navigate if its authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strocs',
        id: '1'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={<PublicRoute />} />
            <Route path='/' element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})
