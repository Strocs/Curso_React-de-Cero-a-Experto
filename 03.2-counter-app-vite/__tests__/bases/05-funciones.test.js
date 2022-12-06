import { describe, expect, test } from "vitest"
import { getUser, getUsuarioActivo } from "../../src/bases/05-funciones"

describe("Pruebas en 05-funciones", () => {
	test("getUser debe retornar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			user: "Strocs",
		}

    const user = getUser()

    expect(user).toEqual(testUser)
	})

  test('getUsuarioActivo debe retornar un objeto', () => { 
    const name = 'Ignacio'

    const testUser = {
      uid: 'ABC834',
      user: name,
    }
    
    const user = getUsuarioActivo(name)

    expect(user).toEqual(testUser)

   })
})
