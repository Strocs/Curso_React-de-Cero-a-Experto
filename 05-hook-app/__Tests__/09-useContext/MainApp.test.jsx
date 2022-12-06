import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../src/09-useContext/MainApp'

describe('Test on <MainApp />', () => {
  test('should display HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('HomePage')).toBeTruthy()

    const aElement = screen.getByText('Home')
    expect(aElement.className).toContain('active')
  })

  test('should display LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('LoginPage')).toBeTruthy()

    const aElement = screen.getByText('Login')
    expect(aElement.className).toContain('active')
  })

  test('should display AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('AboutPage')).toBeTruthy()
  
    const aElement = screen.getByText('About')
    expect(aElement.className).toContain('active')
  })
})
