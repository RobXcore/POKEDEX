import { Ability, Type } from "../../domain/model/IPokemon";

export interface PokemonApi {
	name: string;
	height: number;
	weight: number;
	frontSprite: string;
	types: TypeApi[];
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

export interface TypeApi {
	slot: number;
	type: Type;
}
