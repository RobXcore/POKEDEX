import { Pokemon } from "../../../domain/model/IPokemon";
import { PokemonByRegionResponse } from "../model/IPokemonByRegionResponse";

const PokemonListToPokemonByRegionResponseMapper = (pokemon: Pokemon[]) => {
  const pokemonByRegion: PokemonByRegionResponse = {
    pokemon: pokemon,
  };
  return pokemonByRegion;
};

export default PokemonListToPokemonByRegionResponseMapper;
