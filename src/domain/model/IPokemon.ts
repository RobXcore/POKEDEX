export interface Pokemon {
	name: string;
	height: number;
	weight: number;
}

export interface NameUrl {
	name: string;
	url: string;
}

export interface Type extends NameUrl {}

export interface Ability extends NameUrl {}
