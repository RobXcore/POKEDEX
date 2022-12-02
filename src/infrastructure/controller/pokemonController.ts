import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { RequestParamException } from "../exception/RequstParamException";
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

const BAD_REQUEST = 400;
const ERROR_OFFSET = "El offset enviado no es numérico";
const ERROR_ID_NOT_VALID = "El id ingresado no es válido"

export class PokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon, private readonly IGetPokemonById: IGetPokemonById ) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
  }

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    let requestOffset;

    if (!req.query.offset) {
      requestOffset = 0;
    } else {
      requestOffset = +req.query.offset;
    }

    if (isNaN(requestOffset)) {
      throw new RequestParamException(ERROR_OFFSET, BAD_REQUEST);
    } else {
      res.send(AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute(requestOffset)));
    }
  }

  async getPokemonById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new RequestParamException(ERROR_ID_NOT_VALID, BAD_REQUEST);
    } else {
    res.send((await this.IGetPokemonById.execute(id)));
    }   
  }
}
