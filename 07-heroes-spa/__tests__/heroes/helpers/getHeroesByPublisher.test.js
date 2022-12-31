import { describe, test } from 'vitest'
import { getHeroesByPublisher } from '../../../src/heroes/helpers'

describe('tests on getHeroById.js', () => {
  const publisher = 'Marvel Comics'
  const heroFiltered = getHeroesByPublisher(publisher)

  test('should return an array', () => {
    expect(Array.isArray(heroFiltered)).toBeTruthy()
  })

  test('should return an array of heroes by publisher', () => {
    expect(heroFiltered.length > 1).toBeTruthy()
  })

  test('should return an error if publisher is not valid', () => {
    expect(() => getHeroesByPublisher('Nintendo')).toThrow(
      'Nintendo is not a valid publisher'
    )
  })
})
