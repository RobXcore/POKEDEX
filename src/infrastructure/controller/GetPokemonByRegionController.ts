import { Request, Response } from "express";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";

export class GetPokemonByRegionController {
	constructor (private readonly pokemonByRegionUseCase: IGetPokemonByRegion) {
		this.getPokemonByRegionController = this.getPokemonByRegionController.bind(this);
	}
	async getPokemonByRegionController (req: Request, res: Response): Promise<void> {
		const { region } = req.params;
		if (
			region !== "kanto" &&
			region !== "johto" &&
			region !== "hoenn" &&
			region !== "sinnoh" &&
			region !== "unova" &&
			region !== "kalos" &&
			region !== "galar"
		) {
			res.statusCode = 404;
			res.send(`La region ${region} no existe, hora de jugar Pokemon!`);
		} else {
			const pokeRes = await this.pokemonByRegionUseCase.execute(region);
			res.statusCode = 200;
			res.json(pokeRes);
		}
	}
}
