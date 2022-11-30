import { Pokemon } from "../../../domain/model/IPokemon";
import { PokemonByTypeResponse } from "../model/IPokemonByTypeResponse";

const PokemonListToPokemonByTypeResponse = (pokemon: Pokemon[]) => {
  const pokemonByType: PokemonByTypeResponse = {
    count: pokemon.length,
    pokemon: pokemon,
  };
  return pokemonByType;
};

export default PokemonListToPokemonByTypeResponse;
