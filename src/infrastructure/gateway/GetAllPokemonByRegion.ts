import { Pokemon } from "../../domain/model/IPokemon";
import { IGetAllPokemonByRegionGateway } from "../../domain/port/output/IGetAllPokemonByRegion";
import PokemonApiToPokemonMapper from "../mapper/PokemonApiToPokemonMapper";

export class GetAllPokemonByRegionGateway implements IGetAllPokemonByRegionGateway {
	constructor () {}
	async execute (results: any): Promise<Pokemon[]> {
		const data = await results.results.map((url: any) => url.url);
		const finalData = await Promise.all(
			data.map((item: any) => fetch(item).then((res) => res.json()))
		);
		const mapped = finalData.map((item: any) => PokemonApiToPokemonMapper(item));
		return mapped;
	}
}
//	const mapped = await gateRes.results.map((url: any) => url.url);
//const response = await Promise.all(
//mapped.map((pokemon: any) => fetch(pokemon).then((res) => res.json()))
