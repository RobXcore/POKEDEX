import { NameUrl, Pokemon } from "../model/IPokemon";
import { IGetPokemonByRegion } from "../port/input/IGetPokemonByRegion";
import { IGetAllPokemonByRegionGateway } from "../port/output/IGetAllPokemonByRegionGateway";
import { IGetPokemonByRegionGateway } from "../port/output/IGetPokemonByRegionGateway";

export class GetPokemonByRegionUseCase implements IGetPokemonByRegion {
	constructor (
		private readonly getPokemonByRegionGateway: IGetPokemonByRegionGateway,
		private readonly getAllPokemonByRegionGateway: IGetAllPokemonByRegionGateway
	) {}
	async execute (region: string): Promise<Pokemon[]> {
		const regions = {
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
		const limit = indexes[1] - indexes[0];
		const offset = indexes[0];

		const pokemonListNameUrl = await this.getPokemonByRegionGateway.execute(limit, offset);
		const urlArray = pokemonListNameUrl.results.map(({ url }: NameUrl) => url);
		return await this.getAllPokemonByRegionGateway.execute(urlArray);
	}
}
