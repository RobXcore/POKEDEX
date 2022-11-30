import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
<<<<<<< HEAD
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
=======
import { RequestParamException } from "../exception/RequstParamException";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

const BAD_REQUEST = 400;
const ERROR_OFFSET = "El offset enviado no es numérico";
>>>>>>> 476d413892269318b4adb4f3801570264165c63b

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

  async getPokemonById(id : number) {
    return await this.IGetPokemonById.execute(id);
  }
}
