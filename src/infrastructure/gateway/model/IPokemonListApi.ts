import { NameUrl } from "../../../domain/model/IPokemon";

export interface PokemonListApi {
  count: number;
  next: number;
  previous: number;
  results: NameUrl[];
}
