import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { GifExpertApp } from '../src/GifExpertApp'

describe('tests in <GifExpertApp />', () => {
  test('should match with snapshot of initial state', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })

  test('should return an alert if category is included', () => {
    render(<GifExpertApp />)
    screen.debug()
  })
})
