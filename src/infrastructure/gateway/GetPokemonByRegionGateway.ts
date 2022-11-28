import { IGetPokemonByRegionGateway } from "../../domain/port/output/IGetPokemonByRegionGateway";
import PokemonApiToPokemonMapper from "../mapper/PokemonApiToPokemonMapper";

export class GetPokemonByRegionGateway implements IGetPokemonByRegionGateway {
	constructor () {}
	async execute (region: string, offset: number, limit: number): Promise<any> {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/?limit=${indexes[1] -
				indexes[0]}}&offset=${indexes[0]}`
		);
		const data = await response.json();
		return PokemonApiToPokemonMapper(data);
	}
}

// const getData = async (region: string, offset: number, limit: number): Promise<any> => {
// 	//gateway
// 	const indexes = regions[region as keyof typeof regions];
// 	const response = await fetch(
//
// 	);
// 	const data = await response.json();
// 	return data;
// };
