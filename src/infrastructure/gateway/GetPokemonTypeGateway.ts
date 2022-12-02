import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../../domain/port/output/IGetPokemonTypeGateway";
import { TypeApi } from "./model/IPokemonTypeApi";
import { ApiErrorException } from "../exception/ApiErrorException";

const NOT_FOUND_STATUS_CODE = 404;
const NOT_FOUND_ERROR_MESSAGE =
  "El tipo ingresado no ha sido encontrado. Por favor intente con un nombre válido en inglés o un número entero del 1 al 20 inclusive.";

export class GetPokemonTypeGateway implements IGetPokemonTypeGateway {
  GET_POKEMON_TYPE_URL = "https://pokeapi.co/api/v2/type/";
  //TODO: implementar FetchUtil
  async execute(typeNameOrId: string): Promise<TypeApi> {
    const apiResponse: Response = await fetch(
      this.GET_POKEMON_TYPE_URL + typeNameOrId
    );
    if (apiResponse.status === NOT_FOUND_STATUS_CODE) {
      throw new ApiErrorException(
        NOT_FOUND_ERROR_MESSAGE,
        NOT_FOUND_STATUS_CODE
      );
    }
    const pokemonTypeApi = (await apiResponse.json()) as TypeApi;
    return pokemonTypeApi;
  }
}