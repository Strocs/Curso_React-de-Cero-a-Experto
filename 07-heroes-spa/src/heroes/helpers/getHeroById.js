import { heroes } from "../data/heroes"
import { HeroPage } from "../pages"

export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id)
}