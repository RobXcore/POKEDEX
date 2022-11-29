export interface Pokemon {
	name: string;
	height: number;
	weight: number;
}
export type PokemonArr = {
	pokemon: Pokemon[];
};
export interface NameUrl {
	name: string;
	url: string;
}

export interface Type extends NameUrl {}

export interface Ability extends NameUrl {}
