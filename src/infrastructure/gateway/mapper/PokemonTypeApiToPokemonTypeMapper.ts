import { NameUrl } from "../../../domain/model/IPokemon";
import { PokemonType } from "../../../domain/model/IPokemonType";
import { PokemonTypeApi } from "../model/IPokemonTypeApi";

export const PokemonTypeApiToPokemonType = (pokemonTypeApi: PokemonTypeApi) => {
  const { id, name, pokemon } = pokemonTypeApi;
  const pokemonList: NameUrl[] = pokemon.map((pokemonObject) => pokemonObject.pokemon);
  const pokemonType: PokemonType = {
    id: id,
    name: name,
    pokemonList: pokemonList,
  };
  return pokemonType;
};