import { describe, expect, test } from "vitest";
import { getSaludo } from "../../src/bases/02-template-string";

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar "Hola Ignacio"', () => { 
    const name = "Ignacio"
    const message = getSaludo( name ) 
    expect( message ).toBe(`Hola ${name}`)
   })
})