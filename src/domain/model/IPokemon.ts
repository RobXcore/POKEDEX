export interface Pokemon {
	name: string;
	height: number;
	weight: number;
	types: Type[];
	abilities: Ability[];
	frontSprite: string;
}

export interface NameUrl {
	name: string;
	url: string;
}

export interface Type extends NameUrl {}

export interface TypeApi {
	slot: number;
	type: Type;
}
export interface AbilityApi {
	ability: Ability;
}
export interface Ability extends NameUrl {}
