import { Request, Response } from "express";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";
import { RequestParamException } from "../exception/RequestParamException";

const INVALID_REGION_ERROR_MESSAGE = "La región ingresada no existe en el universo Pokemon";
const BAD_REQUEST_STATUS_CODE = 400;

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
			throw new RequestParamException(INVALID_REGION_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
		} else {
			const pokeRes = await this.pokemonByRegionUseCase.execute(region);
			res.statusCode = 200;
			res.json(pokeRes);
		}
	}
}
