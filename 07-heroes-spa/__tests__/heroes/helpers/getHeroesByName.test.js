import { describe, test } from 'vitest'
import { getHeroesByName } from '../../../src/heroes/helpers'

describe('tests on getHeroById.js', () => {
  test('should return an array', () => {
    const heroFiltered = getHeroesByName('batman')
    expect(Array.isArray(heroFiltered)).toBeTruthy()
  })

  test('should return an array of heroes by partial name', () => {
    const heroFiltered = getHeroesByName('ar')

    expect(heroFiltered.length > 1).toBeTruthy()
  })

  test('should return an empty array if name lenght is 0', () => {
    const heroFiltered = getHeroesByName('')

    expect(heroFiltered).toStrictEqual([])
  })
})
