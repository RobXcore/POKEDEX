import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { RequestParamException } from "../exception/RequstParamException";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

export class PokemonController {
  BAD_REQUEST = 400;
  ERROR_OFFSET = "El offset enviado no es numérico";

  constructor(private readonly IGetAllPokemon: IGetAllPokemon) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    let requestOffset;

    if (!req.query.offset) {
      requestOffset = 0;
    } else {
      requestOffset = +req.query.offset;
    }

    if (isNaN(requestOffset)) {
      throw new RequestParamException(this.ERROR_OFFSET, this.BAD_REQUEST);
    } else {
      res.send(AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute(requestOffset)));
    }
  }
}
