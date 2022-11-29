import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByRegion } from "../port/input/IGetPokemonByRegion";
import { IGetAllPokemonByRegionGateway } from "../port/output/IGetAllPokemonByRegion";
import { IGetPokemonByRegionGateway } from "../../domain/port/output/IGetPokemonByRegionGateway";

export class GetPokemonByRegionUseCase implements IGetPokemonByRegion {
	constructor (
		private readonly getPokemonByRegionGateway: IGetPokemonByRegionGateway,
		private readonly getAllPokemonByRegionGateway: IGetAllPokemonByRegionGateway
	) {}
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
		const limit = indexes[1] - indexes[0];
		const offset = indexes[0];

		const results = await this.getPokemonByRegionGateway.execute(limit, offset);
		return await this.getAllPokemonByRegionGateway.execute(results);
	}
}
