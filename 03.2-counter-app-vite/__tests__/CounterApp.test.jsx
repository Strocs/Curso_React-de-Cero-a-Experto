import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { describe, test, expect, afterEach } from 'vitest'
import CounterApp from '../src/CounterApp'

describe('Pruebas en <CounterApp />', () => {
  const initialValue = 10

  afterEach(cleanup)
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />)
    expect(screen.getByText(100)).toBeTruthy()
  })

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText(11)).toBeTruthy()
  })

  test('debe de disminuir con el botón -1', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText(9)).toBeTruthy()
  })

  test('debe de funcionar el botón de reset', () => {
    render(<CounterApp value={3211415} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

    expect(screen.getByText(3211415)).toBeTruthy()
  })
})
