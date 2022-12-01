import { Pokemon } from "../../domain/model/IPokemon";
import { IGetAllPokemonByRegionGateway } from "../../domain/port/output/IGetAllPokemonByRegion";
import PokemonApiToPokemonMapper from "../mapper/PokemonApiToPokemonMapper";

export class GetAllPokemonByRegionGateway implements IGetAllPokemonByRegionGateway {
	constructor () {}
	async execute ({ results }: any): Promise<Pokemon[]> {
		const data = await results.map(({ url }: any) => url);
		const finalData = await Promise.all(
			data.map((item: any) => fetch(item).then((res) => res.json()))
		);
		const mapped = finalData.map((item: any) => PokemonApiToPokemonMapper(item));
		return mapped;
	}
}
