import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('tests in useForm', () => {
  const initialForm = {
    name: 'Ignacio',
    email: 'strocsdev@gmail.com'
  }
  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })

  test('should change the name of form', () => {
    // [x] montar el hook
    // [x] onInputChange() act, event...
    // [x] expect, result.current.name === Juan
    // [x] expect, result.current.formState.name === Juan
    const { result } = renderHook(() => useForm())
    const { onInputChange } = result.current
    const newValue = 'Juan'

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('should do reset of form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onResetForm, onInputChange } = result.current
    const newValue = 'Juan'

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
