import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonByRegionGateway } from "../../domain/port/output/IGetPokemonByRegionGateway";
import FetchClientUtil from "./util/FetchClientUtil";

export class GetPokemonByRegionGateway implements IGetPokemonByRegionGateway {
	async execute (limit: number, offset: number): Promise<PokemonList> {
		const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
		const response = await FetchClientUtil.get(POKEMON_URL);
		return response;
	}
}
