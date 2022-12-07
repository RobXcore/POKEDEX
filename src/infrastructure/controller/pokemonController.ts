import { Request, Response } from "express";
import { RequestParamException } from "../exception/RequestParamException";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import PokemonListToPokemonByTypeResponse from "./mapper/PokemonListToPokemonByTypeResponseMapper";

/* Schemas and validators*/
import { validate } from "jsonschema";
import pokemonIdSchema from "./schemas/request/pokemonIdSchema.json";
import pokemonTypeSchema from "./schemas/request/pokemonTypeSchema.json";
import offsetSchema from "./schemas/request/offsetSchema.json";

const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_OFFSET_ERROR_MESSAGE = "El offset enviado no es numérico";
const INVALID_ID_ERROR_MESSAGE = "El id ingresado no es válido";
const MISSING_TYPE_IN_PATH_ERROR_MESSAGE =
  "Debe indicarse en el path un nombre de tipo en inglés o algún número entero como id entre 1 y 18 inclusive.";

export class PokemonController {
  constructor(
    private readonly IGetAllPokemon: IGetAllPokemon,
    private readonly IGetPokemonById: IGetPokemonById,
    private readonly IGetPokemonByType: IGetPokemonByType
  ) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
    this.getPokemonByType = this.getPokemonByType.bind(this);
  }

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    const offset = Number(req.query.offset);
    const validation = validate(offset, offsetSchema);

    if (!validation.valid) {
      throw new RequestParamException(INVALID_OFFSET_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      res.send(AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute(offset)));
    }
  }

  async getPokemonById(req: Request, res: Response): Promise<void> {
    const pokemonId = +req.params.id;
    const validation = validate(pokemonId, pokemonIdSchema);

    if (!validation.valid) {
      throw new RequestParamException(INVALID_ID_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      res.send(await this.IGetPokemonById.execute(pokemonId));
    }
  }

  async getPokemonByType(req: Request, res: Response): Promise<void> {
    const pokemonType = req.params.type;
    const validation = validate(pokemonType, pokemonTypeSchema);

    if (!validation.valid) {
      throw new RequestParamException(MISSING_TYPE_IN_PATH_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
    } else {
      res.send(PokemonListToPokemonByTypeResponse(await this.IGetPokemonByType.execute(pokemonType)));
    }
  }
}
