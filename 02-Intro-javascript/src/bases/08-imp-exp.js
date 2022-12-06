//Export, imports
// import { heroes } from './data/heroes'
// import {heroes} from './data/heroes'
import heroes, {owners} from "../data/heroes"

export const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id)

// console.log(getHeroesById(2));


export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner)
}

// console.log(getHeroesByOwner('Marvel'));

// console.log(owners);
