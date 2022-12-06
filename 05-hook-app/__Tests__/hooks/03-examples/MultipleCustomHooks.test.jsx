import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../src/hooks/useCounter'
import { useFetch } from '../../../src/hooks/useFetch'

vi.mock('../../../src/hooks/useFetch')
vi.mock('../../../src/hooks/useCounter')

describe('Tests on MultipleCustomHooks', () => {
  const mockIncrement = vi.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should show component for default', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })
    render(<MultipleCustomHooks />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('BreakingBad Quotes'))

    const nextButton = screen.getByRole('button', { name: 'Siguiente >' })

    expect(nextButton.disabled).toBeTruthy()
  })

  test('should display a Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Hola Mundo')).toBeTruthy()
    expect(screen.getByText('Fernando')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Siguiente >' })
    expect(nextButton.disabled).toBeFalsy()
  })

  test('should coll increment function', () => {
    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'Siguiente >' })
    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalled()
  })
})
