import { Request, Response } from "express";
import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { RequestParamException } from "../exception/RequstParamException";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";

const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_OFFSET_ERROR_MESSAGE = "El offset enviado no es numérico";
const MISSING_TYPE_IN_PATH_ERROR_MESSAGE =
  "Debe indicarse en el path un nombre de tipo en inglés o algún número entero como id.";

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

    !req.query.offset ? requestOffset = 0 : requestOffset = +req.query.offset;

    if (isNaN(requestOffset)) {
      throw new RequestParamException(
        INVALID_OFFSET_ERROR_MESSAGE,
        BAD_REQUEST_STATUS_CODE
      );
    } else {
      res.send(
        AllPokemonToAllPokemonResponse(
          await this.IGetAllPokemon.execute(requestOffset)
        )
      );
    }
  }

  async getPokemonByType(req: Request, res: Response): Promise<void> {
    let typeNameOrId: string;

    if (!req.params.type) {
      throw new RequestParamException(
        MISSING_TYPE_IN_PATH_ERROR_MESSAGE,
        BAD_REQUEST_STATUS_CODE
      );
    } else {
      typeNameOrId = req.params.type;
    }
    //TODO: añadir validación para typeNameOrId
    res.send(
      //TODO: añadir conversión con mapper
      await this.IGetPokemonByType.execute(typeNameOrId)
    );
  }
}
