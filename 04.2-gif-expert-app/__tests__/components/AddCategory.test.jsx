import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { AddCategory } from '../../src/components/AddCategory'

describe('tests in <AddCategory />', () => {
  const inputValue = 'Hunter X Hunter'

  test('should change the value of input box', () => {
    render(<AddCategory onAddCategory={() => {}} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Saitama' } })

    expect(input.value).toBe('Saitama')
  })

  test('should call onNewCategory if input have a value', () => {
    const onNewCategory = vi.fn()
    render(<AddCategory onAddCategory={onNewCategory} />)
    const form = screen.getByRole('form')
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory if input is empty', () => {
    // hace una simulación de la función propia en el componente, MUY UTIL!
    const onNewCategory = vi.fn()
    render(<AddCategory onAddCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })
})
