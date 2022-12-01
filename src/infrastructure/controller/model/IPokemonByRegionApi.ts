import { Type, Ability, NameUrl } from "../../../domain/model/IPokemon";

export interface TypeApi {
	slot: number;
	type: Type;
}
export interface AbilityApi {
	ability: Ability;
}

export interface ResultsApi {
	results: NameUrl[];
}
