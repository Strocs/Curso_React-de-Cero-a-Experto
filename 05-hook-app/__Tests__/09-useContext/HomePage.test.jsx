import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

describe('Tests on <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Fernando'
  }
  test('should be displayed without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre') //aria-label
    expect(preTag.innerHTML).toBe('null')
  })

  test('should be displayed with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre') //aria-label
    expect(JSON.parse(preTag.innerHTML)).toEqual(user) //my solution

    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(user.id.toString())
  })
})
