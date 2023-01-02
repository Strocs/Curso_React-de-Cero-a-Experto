import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page}0`
    )
    dispatch(setPokemons({ page: page + 1, pokemons: data.results }))
  
    // fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}0`)
    //   .then(resp => resp.json())
    //   .then(({ results }) => dispatch(setPokemons({page: page + 1, pokemons: results})))
  }
}
