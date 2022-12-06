import { describe, expect, test } from 'vitest'
import { getHeroesById, getHeroesByOwner } from '../../src/bases/08-imp-exp'

describe('Pruebas en 08-imp-exp', () => {
	test('Debería retornar un heroe por Id', () => {
		const idHero = 1
		const { id } = getHeroesById(idHero)

		expect(id).toEqual(idHero)
	})

	test('Debería retornar undefined si el heroe no existe', () => {
		const idHero = 100
		const hero = getHeroesById(idHero)

		expect(hero).toBeFalsy()
	})

	test('Debería retornar un arreglo con los héroes de DC', () => {
		const owner = 'DC'
		const heroes = getHeroesByOwner(owner)

		// const heroesDC = [
		// 	{ id: 1, name: 'Batman', owner: 'DC' },
		// 	{ id: 3, name: 'Superman', owner: 'DC' },
		// 	{ id: 4, name: 'Flash', owner: 'DC' },
		// ]
		// expect(heroes).toEqual(heroesDC)

		expect(heroes.length).toBe(3)
    //forma correcta
		expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
	})

	test('Debería retornar un arreglo con los héroes de Marvel', () => {
		const owner = 'Marvel'
		const heroes = getHeroesByOwner(owner)

		// const heroesMarvel = [
		// 	{ id: 2, name: 'Spiderman', owner: 'Marvel' },
		// 	{ id: 5, name: 'Wolverine', owner: 'Marvel' },
		// ]
    // expect(heroes).toEqual(heroesMarvel)

		expect(heroes.length).toBe(2)
    //forma correcta
		expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
	})
})
