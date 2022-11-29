import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import { ApiErrorException } from "../exception/ApiErrorException";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";

const ERROR_MESSAGE = "La respuesta de la API fue distinta de 200: ";
const INTERNAL_SERVER_ERROR = 500;

export class GetPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  async execute(url: string): Promise<Pokemon> {
    const responseApi = await fetch(url);
    if (responseApi.status === 200) {
      const pokemonApi = (await responseApi.json()) as PokemonApi;
      return PokemonApiToPokemonMapper(pokemonApi);
    } else {
      throw new ApiErrorException(
        ERROR_MESSAGE + responseApi.url + responseApi.status + responseApi.statusText,
        INTERNAL_SERVER_ERROR
      );
    }
  }
}
