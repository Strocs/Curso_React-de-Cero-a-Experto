import { describe, expect, test } from "vitest"
import { noSirveUseContext } from "../../src/bases/06-desest-objetos"

describe('Pruebas en 06-desest-objetos', () => {
  test('Debería retornar un objeto', () => { 

    
    const clave = 'Spiderman'
    const edad = 36

    const testUser = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 92.314,
        lng: 92.123,
      }
    }

    const user = noSirveUseContext({clave, edad})

    expect(user).toEqual(testUser)
   })

})