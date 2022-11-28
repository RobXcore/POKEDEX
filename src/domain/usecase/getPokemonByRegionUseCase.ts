import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByRegion } from "../port/input/IGetPokemonByRegion";
import { IGetPokemonByRegionGateway } from "../port/output/IGetPokemonByRegionGateway";

export class GetPokemonByRegionUseCase implements IGetPokemonByRegion {
	constructor (private readonly getPokemonByRegionGateway: IGetPokemonByRegionGateway) {}
	async execute (region: string): Promise<Pokemon[]> {
		const regions = {
			//UseCase?
			kanto: [ 0, 151 ],
			johto: [ 151, 251 ],
			hoenn: [ 251, 386 ],
			sinnoh: [ 386, 493 ],
			unova: [ 493, 649 ],
			kalos: [ 649, 721 ],
			alola: [ 721, 809 ],
			galar: [ 809, 898 ]
		};
		const indexes = regions[region as keyof typeof regions];
		const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${indexes[1] -
			indexes[0]}}&offset=${indexes[0]}`;

		const gateRes = await this.getPokemonByRegionGateway.execute(URL);
		const mapped = await gateRes.results.map((url: any) => url.url);
		const response = await Promise.all(
			mapped.map((pokemon: any) => fetch(pokemon).then((res) => res.json()))
		);
		console.log(response);
		return gateRes;
	}
}

//logica de negocios, codigo arbitrario VA ACA
//el caso de uso llama a los puertos de salida, no al gateway, los puertos son puntos de conexion entre dominio e infraestructu
