import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";
import { ApiErrorException } from "../exception/ApiErrorException";
import { PokemonListApi } from "./model/IPokemonListApi";

const ERROR_MESSAGE = "La respuesta de la API fallo: ";
const INTERNAL_SERVER_ERROR = 500;
const URL_GET_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=";
// TODO: nombre + apropiado sería GetAllPokemonListGateway
export class GetPokemonListGateway implements IGetPokemonListGateway {
  async execute(offset: number): Promise<PokemonList> {
    const responseApi = await fetch(URL_GET_POKEMON_LIST + offset);

    if (responseApi.status === 200) {
      const pokemonListApi = (await responseApi.json()) as PokemonListApi;

      const { results } = pokemonListApi;
      const pokemonList: PokemonList = {
        results: results,
      };

      return pokemonList;
    } else {
      throw new ApiErrorException(
        ERROR_MESSAGE + `${responseApi.url} ${responseApi.status} ${responseApi.statusText}`,
        INTERNAL_SERVER_ERROR
      );
    }
  }
}
