import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { RequestParamException } from "../exception/RequestParamException";
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";
import PokemonListToPokemonByTypeResponse from "./mapper/PokemonListToPokemonByTypeResponseMapper";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";

const REGIONS = [ "kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar" ];
const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_REGION_ERROR_MESSAGE = "La región ingresada no existe en el universo Pokemon";
const INVALID_OFFSET_ERROR_MESSAGE = "El offset enviado no es numérico";
const INVALID_ID_ERROR_MESSAGE = "El id ingresado no es válido";
const MISSING_TYPE_IN_PATH_ERROR_MESSAGE =
	"Debe indicarse en el path un nombre de tipo en inglés o algún número entero como id entre 1 y 18 inclusive.";

export class PokemonController {
	constructor (
		private readonly IGetAllPokemon: IGetAllPokemon,
		private readonly IGetPokemonById: IGetPokemonById,
		private readonly IGetPokemonByType: IGetPokemonByType,
		private readonly IGetPokemonByRegion: IGetPokemonByRegion
	) {
		this.getAllPokemon = this.getAllPokemon.bind(this);
		this.getPokemonById = this.getPokemonById.bind(this);
		this.getPokemonByType = this.getPokemonByType.bind(this);
		this.getPokemonByRegion = this.getPokemonByRegion.bind(this);
	}

	async getAllPokemon (req: Request, res: Response): Promise<void> {
		let requestOffset;

		!req.query.offset ? (requestOffset = 0) : (requestOffset = +req.query.offset);

		if (isNaN(requestOffset)) {
			throw new RequestParamException(INVALID_OFFSET_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
		} else {
			res.send(
				AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute(requestOffset))
			);
		}
	}

	async getPokemonById (req: Request, res: Response): Promise<void> {
		const id = Number(req.params.id);

		if (isNaN(id)) {
			throw new RequestParamException(INVALID_ID_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
		} else {
			res.send(await this.IGetPokemonById.execute(id));
		}
	}

	async getPokemonByType (req: Request, res: Response): Promise<void> {
		let typeNameOrId: string;

		if (!req.params.type || req.params.type.trim() === "") {
			throw new RequestParamException(
				MISSING_TYPE_IN_PATH_ERROR_MESSAGE,
				BAD_REQUEST_STATUS_CODE
			);
		} else {
			typeNameOrId = req.params.type.trim();
			res.send(
				PokemonListToPokemonByTypeResponse(
					await this.IGetPokemonByType.execute(typeNameOrId)
				)
			);
		}
	}

	async getPokemonByRegion (req: Request, res: Response): Promise<void> {
		const { region } = req.params;
		if (!REGIONS.some((regionArr) => region.includes(regionArr))) {
			throw new RequestParamException(INVALID_REGION_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
		} else {
			const pokeRes = await this.IGetPokemonByRegion.execute(region);
			res.statusCode = 200;
			res.json(pokeRes);
		}
	}
}
