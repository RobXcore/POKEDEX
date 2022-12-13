import { NameUrl } from "../../../domain/model/IPokemon";

export interface PokemonTypeApi {
  id: number;
  name: string;
  damage_relations: object;
  past_damage_relations: [];
  game_indices: [];
  generation: object;
  move_damage_class: object;
  names: [];
  pokemon: PokemonObject[];
  moves: NameUrl[];
}

interface PokemonObject {
  pokemon: NameUrl;
}
