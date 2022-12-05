import { ResultsApi } from "../../../infrastructure/controller/model/IPokemonByRegionApi";
import { Pokemon } from "../../model/IPokemon";

export interface IGetAllPokemonByRegionGateway {
	execute(results: string[]): Promise<Pokemon[]>;
}
