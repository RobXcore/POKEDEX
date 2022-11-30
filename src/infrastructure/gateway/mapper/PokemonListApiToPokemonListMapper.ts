import { PokemonList } from "../../../domain/model/IPokemonList";
import { PokemonListApi } from "../model/IPokemonListApi";

export const PokemonListApiToPokemonListMapper = (pokemonListApi: PokemonListApi) => {
  const { results } = pokemonListApi;
  const pokemonList: PokemonList = {
    results: results,
  };

  return pokemonList;
};
