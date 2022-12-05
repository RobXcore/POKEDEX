import { NameUrl } from "./IPokemon";

export interface PokemonType {
  id: number;
  name: string;
  pokemonList: NameUrl[];
}