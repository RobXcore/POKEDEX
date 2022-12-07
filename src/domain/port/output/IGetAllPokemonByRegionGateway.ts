import { Pokemon } from "../../model/IPokemon";

export interface IGetAllPokemonByRegionGateway {
	execute(urlList: string[]): Promise<Pokemon[]>;
}
