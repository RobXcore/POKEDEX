import { Request, Response } from "express";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";
import { RequestParamException } from "../exception/RequstParamException";

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
			throw new RequestParamException(
				`La region ${region} no existe, hora de jugar Pokemon!`,
				404
			);
		} else {
			const pokeRes = await this.pokemonByRegionUseCase.execute(region);
			res.statusCode = 200;
			res.json(pokeRes);
		}
	}
}
