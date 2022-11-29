import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import { ApiErrorException } from "../exception/ApiErrorException";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";

export class GetPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  ERROR_MESSAGE = "La respuesta de la API fue distinta de 200: ";
  INTERNAL_SERVER_ERROR = 500;

  async execute(url: string): Promise<Pokemon> {
    const responseApi = await fetch(url);
    if (responseApi.status === 200) {
      const pokemonApi = (await responseApi.json()) as PokemonApi;
      return PokemonApiToPokemonMapper(pokemonApi);
    } else {
      throw new ApiErrorException(
        this.ERROR_MESSAGE + responseApi.url + responseApi.status + responseApi.statusText,
        this.INTERNAL_SERVER_ERROR
      );
    }
  }
}
