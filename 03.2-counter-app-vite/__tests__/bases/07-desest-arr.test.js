import { describe, expect, test } from "vitest"
import { retornaArreglo } from "../../src/bases/07-desest-arr"

describe('Pruebas en 04-deses-arr', () => { 
  test('Debe retornar un string y un número', () => {
    const [letters, numbers ] = retornaArreglo()

    //toBe también evalúa tipo de datos
    expect(letters).toBe('abc')
    expect(numbers).toBe(123)

    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
    
    //expect.any espera cualquier tipo de string
    //funciona igual que la de arriba
    expect(letters).toEqual(expect.any(String))
    
  })
 })