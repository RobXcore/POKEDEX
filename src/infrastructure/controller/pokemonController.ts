import { Request, Response } from "express";
import { RequestParamException } from "../exception/RequestParamException";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import PokemonListToPokemonByTypeResponse from "./mapper/PokemonListToPokemonByTypeResponseMapper";
import { IGetPokemonByRegion } from "../../domain/port/input/IGetPokemonByRegion";
import { responseValidator } from "./util/ResponseValidator";

/* Schemas and validators*/
import { validate } from "jsonschema";
import apidoc from "../../resources/swagger.json";
import requestParams from "../controller/schemas/request/requestParams.json";
import PokemonListToPokemonByRegionResponseMapper from "./mapper/PokemonListToPokemonByRegionResponseMapper";

const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_REGION_ERROR_MESSAGE = "La región ingresada no existe en el universo Pokemon";
const INVALID_OFFSET_ERROR_MESSAGE = "El offset enviado no es numérico";
const INVALID_ID_ERROR_MESSAGE = "El id ingresado no es válido";
const MISSING_TYPE_IN_PATH_ERROR_MESSAGE =
  "Debe indicarse en el path un nombre de tipo en inglés o algún número entero como id entre 1 y 18 inclusive.";

export class PokemonController {
  constructor(
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

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    const offset = Number(req.query.offset) || 0;
    const validation = validate(offset, requestParams.definitions.offset);

    if (!validation.valid) {
      throw new RequestParamException(INVALID_OFFSET_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      const allPokemon = AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute(offset));
      res.send(responseValidator(allPokemon, apidoc.definitions.AllPokemonResponse));
    }
  }

  async getPokemonById(req: Request, res: Response): Promise<void> {
    const pokemonId = Number(req.params.id);
    const validation = validate(pokemonId, requestParams.definitions.pokemonId);

    if (!validation.valid) {
      throw new RequestParamException(INVALID_ID_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      const pokemon = await this.IGetPokemonById.execute(pokemonId);
      res.send(responseValidator(pokemon, apidoc.definitions.Pokemon));
    }
  }

  async getPokemonByType(req: Request, res: Response): Promise<void> {
    const pokemonType = req.params.type;
    const validation = validate(pokemonType, requestParams.definitions.pokemonType);

    if (!validation.valid) {
      throw new RequestParamException(MISSING_TYPE_IN_PATH_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      const pokemonListByType = PokemonListToPokemonByTypeResponse(await this.IGetPokemonByType.execute(pokemonType));
      res.send(responseValidator(pokemonListByType, apidoc.definitions.PokemonByTypeResponse));
    }
  }

  async getPokemonByRegion(req: Request, res: Response): Promise<void> {
    const pokemonRegion = req.params.region;
    const validation = validate(pokemonRegion, requestParams.definitions.pokemonRegion);

    if (!validation.valid) {
      throw new RequestParamException(INVALID_REGION_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      const pokemonListByRegion = PokemonListToPokemonByRegionResponseMapper(
        await this.IGetPokemonByRegion.execute(pokemonRegion)
      );
      res.send(responseValidator(pokemonListByRegion, apidoc.definitions.PokemonByRegionResponse));
    }
  }
}
