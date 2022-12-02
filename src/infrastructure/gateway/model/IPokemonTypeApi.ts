import { NameUrl } from "../../../domain/model/IPokemon";

export interface TypeApi {
  id: number;
  name: string;
  pokemonList: PokemonObject[];
}

interface PokemonObject {
  pokemon: NameUrl;
}
