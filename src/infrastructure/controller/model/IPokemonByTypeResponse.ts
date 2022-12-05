import { Pokemon } from "../../../domain/model/IPokemon";

export interface PokemonByTypeResponse {
  count: number;
  pokemon: Pokemon[];
}
