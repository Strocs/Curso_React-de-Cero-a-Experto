import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks'

vi.mock('../../src/hooks/useFetchGifs')

describe('tests in <GifGrid />', () => {
  const category = 'One Punch'
  test('should display the loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={category} />)
    expect(screen.getByText(category))
    expect(screen.getByText('Cargando...'))
  })

  test('should display items when images were loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'a2ba41sas2d',
        title: 'tio1',
        url: 'https://t.io/1.jpg'
      },
      {
        id: '23124821as',
        title: 'tio2',
        url: 'https://t.io/2.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
