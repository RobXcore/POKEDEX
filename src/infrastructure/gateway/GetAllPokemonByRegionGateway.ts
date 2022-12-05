import { Pokemon } from "../../domain/model/IPokemon";

import { IGetAllPokemonByRegionGateway } from "../../domain/port/output/IGetAllPokemonByRegionGateway";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";
import FetchClientUtil from "./util/FetchClientUtil";

export class GetAllPokemonByRegionGateway implements IGetAllPokemonByRegionGateway {
	constructor () {}
	async execute (data: string[]): Promise<Pokemon[]> {
		const urlArray = await Promise.all(data.map((url: string) => FetchClientUtil.get(url)));
		const individualMappedPokemon = urlArray.map((item: PokemonApi) =>
			PokemonApiToPokemonMapper(item)
		);
		return individualMappedPokemon;
	}
}
