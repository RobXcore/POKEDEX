import { Type, Ability } from "../../../domain/model/IPokemon";

export interface TypeApi {
	slot: number;
	type: Type;
}
export interface AbilityApi {
	ability: Ability;
}
