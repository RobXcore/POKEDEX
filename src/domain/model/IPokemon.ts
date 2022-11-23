export interface Pokemon {
	name: string;
	height: number;
	weight: string;
	types: Type[];
	abilities: Ability[];
	frontSprite: string;
}

export interface NameUrl {
	name: string;
	url: string;
}

export interface Type extends NameUrl {}

export interface Ability extends NameUrl {}
