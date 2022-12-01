import { Request, Response } from "express";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";
export class GetPokemonByRegionController {
	constructor (private readonly pokemonByRegionUseCase: IGetPokemonByRegion) {
		this.getPokemonByRegionController = this.getPokemonByRegionController.bind(this);
	}
	async getPokemonByRegionController (req: Request, res: Response): Promise<void> {
		const { region } = req.params;
		const pokeRes = await this.pokemonByRegionUseCase.execute(region);
		res.statusCode = 200;
		res.json(pokeRes);
	}
}
