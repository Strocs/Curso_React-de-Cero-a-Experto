import { describe, test } from 'vitest'
import { getHeroById } from '../../../src/heroes/helpers'

describe('tests on getHeroById.js', () => {
  const hero = {
    id: 'dc-batman',
    superhero: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    characters: 'Bruce Wayne'
  }

  const heroFiltered = getHeroById(hero.id)

  test('should return an object', () => {
    expect(heroFiltered && typeof heroFiltered === 'object').toBeTruthy()
  })

  test('should return a hero by id', () => {
    expect(heroFiltered).toStrictEqual(hero)
  })
})
