import { Ability, Type } from "../../../domain/model/IPokemon";

export interface PokemonApi {
  name: string;
  height: number;
  weight: number;
  frontSprite: string;
  types: Type[];
  abilities: Ability[];
  sprites: Sprite;
}

interface Sprite {
  front_default: string;
}
