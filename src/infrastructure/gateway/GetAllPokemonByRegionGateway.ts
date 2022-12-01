import { NameUrl, Pokemon } from "../../domain/model/IPokemon";
import { ResultsApi } from "../controller/model/IPokemonByRegionApi";
import { IGetAllPokemonByRegionGateway } from "../../domain/port/output/IGetAllPokemonByRegion";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";
import FetchClientUtil from "./util/FetchClientUtil";

export class GetAllPokemonByRegionGateway implements IGetAllPokemonByRegionGateway {
	constructor () {}
	async execute ({ results }: ResultsApi): Promise<Pokemon[]> {
		const data = results.map(({ url }: NameUrl) => url);
		console.log(data);
		const finalData = await Promise.all(data.map((url: string) => FetchClientUtil.get(url)));
		const mapped = finalData.map((item: PokemonApi) => PokemonApiToPokemonMapper(item));
		return mapped;
	}
}
