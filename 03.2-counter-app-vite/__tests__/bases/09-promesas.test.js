import { getHeroeByIdAsync } from '../../src/bases/09-promesas'
import { describe, test, expect } from 'vitest'

describe('Pruebas en 09-promesas', () => {
	test('getHeroeByIdAsync debe retornar un héroe', async () => {
		const id = 1
		await getHeroeByIdAsync(id).then(hero => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			})
		})
	})

	test('getHeroeByIdAsync debe retornar error si el héroe no existe', async () => {
		const id = 1
		await getHeroeByIdAsync(id).catch(error => {
			expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
		})
	})
})