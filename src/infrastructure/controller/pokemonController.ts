import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { RequestParamException } from "../exception/RequstParamException";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";

const BAD_REQUEST = 400;
const ERROR_OFFSET = "El offset enviado no es numérico";

export class PokemonController {
  constructor(
    private readonly IGetAllPokemon: IGetAllPokemon,
    private readonly IGetPokemonByType: IGetPokemonByType
  ) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemonByType = this.getPokemonByType.bind(this);
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

  async getPokemonByType(type: string | number) {
    await this.IGetPokemonByType.execute(type);
  }
}
