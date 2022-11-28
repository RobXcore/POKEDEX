import { IGetPokemonByRegionGateway } from "../../domain/port/output/IGetPokemonByRegionGateway";
import PokemonApiToPokemonMapper from "../mapper/PokemonApiToPokemonMapper";
import { PokemonApi } from "../model/IPokemonApi";

export class GetPokemonByRegionGateway implements IGetPokemonByRegionGateway {
	constructor () {}
	async execute (url: string): Promise<PokemonApi> {
		const response = await fetch(url);
		const data = await response.json();
		return PokemonApiToPokemonMapper(data);
	}
}
