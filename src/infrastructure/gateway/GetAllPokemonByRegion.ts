import { IGetAllPokemonByRegionGateway } from "../../domain/port/output/IGetAllPokemonByRegion";
import PokemonApiToPokemonMapper from "../mapper/PokemonApiToPokemonMapper";

export class GetAllPokemonByRegionGateway implements IGetAllPokemonByRegionGateway {
	constructor () {}
	async execute (results: any): Promise<any> {
		const data = await results.results.map((url: any) => url.url);
		const finalData = await Promise.all(
			data.map((item: any) => fetch(item).then((res) => res.json()))
		);
		return PokemonApiToPokemonMapper(finalData);
	}
}
//	const mapped = await gateRes.results.map((url: any) => url.url);
//const response = await Promise.all(
//mapped.map((pokemon: any) => fetch(pokemon).then((res) => res.json()))
