import { Ability, ShortType } from "../../../domain/model/IPokemon";

export interface PokemonApi {
  name: string;
  height: number;
  weight: number;
  frontSprite: string;
  types: ShortTypeApi[];
  abilities: AbilityApi[];
  sprites: Sprite;
}

interface Sprite {
  front_default: string;
}

export interface AbilityApi {
  slot: number;
  ability: Ability;
}

export interface ShortTypeApi {
  slot: number;
  type: ShortType;
}
