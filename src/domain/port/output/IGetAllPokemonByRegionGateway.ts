import { Pokemon } from "../../model/IPokemon";

export interface IGetAllPokemonByRegionGateway {
	execute(results: string[]): Promise<Pokemon[]>;
}
