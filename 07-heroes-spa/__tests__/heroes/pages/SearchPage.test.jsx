import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, test, vi } from 'vitest'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'
import { useForm } from '../../../src/hooks/useForm'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => navigate
  }
})

describe('Tests on <SearchPage /.', () => {
  test('should be displayed with default values', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
    expect(screen.getByText('Search a hero')).toBeTruthy()
    expect(screen.queryByText('No hero with')).toBeNull()
  })

  test('should display Batman and the input with the queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const image = screen.getByRole('img')
    expect(image.src).toContain('/assets/dc-batman.jpg')

    expect(screen.queryByText('Search a hero')).toBeNull()
    expect(screen.queryByText('No hero with')).toBeNull()
  })

  test('should display No hero with tag if hero does`nt exist', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=pikachu']}>
        <SearchPage />
      </MemoryRouter>
    )
    const noHeroWith = screen.getByText('No hero with')
    const pikachu = screen.getByText('pikachu')

    expect(screen.queryByText('Search a hero')).toBeFalsy()
    expect(noHeroWith).toBeTruthy()
    expect(noHeroWith).toContainElement(pikachu)
  })

  test('should call navigate to the new screen', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {
      target: { name: 'searchText', value: 'superman' }
    })
    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect(navigate).toHaveBeenCalledWith('?q=superman')
  })
})
