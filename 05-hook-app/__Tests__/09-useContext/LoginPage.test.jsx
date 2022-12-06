import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Test on <LoginPage />', () => {

  const newUser = { id: 123, name: 'Ignacio', email: 'strocsdev@gmail.com' }
  
  test('should display component without user', () => {
    render(
      <UserContext.Provider value={{}}>
        <LoginPage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('')
  })

  test('should display component with user when button is clicked', () => {

    const setUserMock = vi.fn()
    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    )
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    expect(setUserMock).toHaveBeenCalledWith(newUser)
  })
})
