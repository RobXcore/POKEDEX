import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../../domain/port/output/IGetPokemonTypeGateway";
import { TypeApi } from "./model/IPokemonTypeApi";

export class GetPokemonTypeGateway implements IGetPokemonTypeGateway {
  GET_POKEMON_TYPE_URL = "https://pokeapi.co/api/v2/type/";

  async execute(type: string | number): Promise<TypeApi> {
    const apiResponse: Response = await fetch(this.GET_POKEMON_TYPE_URL + type);
    const pokemonTypeApi = (await apiResponse.json()) as TypeApi;

    //TODO: revisar qué trae el cuerpo de la respuesta
    console.log(pokemonTypeApi);

    return pokemonTypeApi;
  }
}
