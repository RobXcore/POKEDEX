export interface Pokemon {
	name: string;
	height: number;
	weight: number;
	types: ShortType[];
	abilities: Ability[];
	frontSprite: string;
}

export interface NameUrl {
	name: string;
	url: string;
}

export interface ShortType extends NameUrl {}

export interface Ability extends NameUrl {}
