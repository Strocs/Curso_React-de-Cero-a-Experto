import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {
  const title = 'Imagen de tio1.jpg'
  const url = 'https://tio1.jpg/'

  test('should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('should show the image with given url and alt', () => {
    render(<GifItem title={title} url={url} />)
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should show title in component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
