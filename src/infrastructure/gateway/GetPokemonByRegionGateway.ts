import { IGetPokemonByRegionGateway } from "../../domain/port/output/IGetPokemonByRegionGateway";

export class GetPokemonByRegionGateway implements IGetPokemonByRegionGateway {
	async execute (limit: number, offset: number): Promise<any> {
		const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit -
			offset}}&offset=${offset}`;
		const response = await fetch(POKEMON_URL);
		const data = await response.json();
		return data;
	}
}

//	const mapped = await gateRes.results.map((url: any) => url.url);
//const response = await Promise.all(
//mapped.map((pokemon: any) => fetch(pokemon).then((res) => res.json()))
