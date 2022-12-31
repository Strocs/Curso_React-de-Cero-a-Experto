import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom'
import { describe, test, vi } from 'vitest'
import { HeroPage } from '../../../src/heroes/pages/HeroPage'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => navigate,
    useParams: vi.fn()
  }
})

describe('Tests on <HeroPage />', () => {
  const hero = {
    id: 'dc-batman',
    superhero: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    characters: 'Bruce Wayne'
  }

  test('should display an image and all info of a hero got from queryParams', () => {
    vi.mocked(useParams).mockReturnValue({ id: hero.id })

    render(
      <MemoryRouter>
        <HeroPage />
      </MemoryRouter>
    )

    const image = screen.getByRole('img')
    expect(image.src).toContain(hero.id)

    expect(screen.getByText(hero.superhero)).toBeTruthy()
    expect(screen.getByText(hero.publisher)).toBeTruthy()
    expect(screen.getByText(hero.first_appearance)).toBeTruthy()
    expect(
      screen.getAllByText(hero.alter_ego) &&
        screen.getAllByText(hero.characters)
    ).toBeTruthy()
  })

  test('should call navigate when Back button is clicked', () => {
    vi.mocked(useParams).mockReturnValue({ id: hero.id })

    render(
      <MemoryRouter>
        <HeroPage />
      </MemoryRouter>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(navigate).toHaveBeenCalledWith(-1)
  })

  test('should display marvel page if hero does`nt exist', () => {
    const heroId = 'pikachu'

    vi.mocked(useParams).mockReturnValue({ id: heroId })

    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path='/marvel' element={<h1>Marvel Page</h1>} />
          <Route path={`/hero/${heroId}`} element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})
