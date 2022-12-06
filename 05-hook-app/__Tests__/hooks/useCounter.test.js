import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, decrement, increment, reset } = result.current
    expect(counter).toBe(0)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should generate the counter with de value of 100', () => {
    const { result } = renderHook(() => useCounter(100)) // initialValue = 100
    const { counter } = result.current
    expect(counter).toBe(100)
  })

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter()) //initialValue = 0
    const { increment } = result.current
    //Cuándo quiero modificar el valor del state, uso el act, al hacer esto debo volver a buscar el valor del counter desde el result cuando hago el expect
    //Para llamar más de una vez una modificación al state se recomienda llamar el valor previo al hacer setState( (curr) => curr + value)
    act(() => {
      increment() // +1
      increment() // +1
    })
    expect(result.current.counter).toBe(2)
  })

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(2)) //initialValue = 2
    const { decrement } = result.current
    act(() => {
      decrement() // -1
      decrement() // -1
    })
    expect(result.current.counter).toBe(0)
  })

  test('should not decrement when counter value is 0', () => {
    const { result } = renderHook(() => useCounter()) //initialValue = 0
    const { decrement } = result.current
    act(() => {
      decrement() // -1
    })
    expect(result.current.counter).toBe(0)
  })

  test('should reset the counter to initialValue', () => {
    const { result } = renderHook(() => useCounter(10)) //initialValue = 10
    const { reset, increment } = result.current
    act(() => {
      increment() // +1
      increment() // +1
      increment() // +1
      increment() // +1
      reset() // reset to 10
    })
    expect(result.current.counter).toBe(10)
  })
})
