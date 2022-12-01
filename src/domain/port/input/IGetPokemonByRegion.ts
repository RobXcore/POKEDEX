import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByRegion {
	execute(region: string): Promise<Pokemon[]>;
}
