import { NameUrl } from "../../../domain/model/IPokemon";

export interface PokemonTypeApi {
  id: number;
  name: string;
  damage_relations: {};
  past_damage_relations: [];
  game_indices: [];
  generation: {};
  move_damage_class: {};
  names: [];
  pokemon: PokemonObject[];
  moves: NameUrl[];
}

interface PokemonObject {
  pokemon: NameUrl;
}
