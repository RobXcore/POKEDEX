import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../../domain/port/output/IGetPokemonTypeGateway";
import { PokemonTypeApi } from "./model/IPokemonTypeApi";
import FetchClientUtil from "./util/FetchClientUtil";
import { PokemonTypeApiToPokemonType } from './mapper/PokemonTypeApiToPokemonTypeMapper';
import { PokemonType } from "../../domain/model/IPokemonType";

export class GetPokemonTypeGateway implements IGetPokemonTypeGateway {
  GET_POKEMON_TYPE_URL = "https://pokeapi.co/api/v2/type/";

  async execute(typeNameOrId: string): Promise<PokemonType> {
    const apiResponse = await FetchClientUtil.get(
      this.GET_POKEMON_TYPE_URL + typeNameOrId
    );
    const pokemonTypeApi = apiResponse as PokemonTypeApi;
    return PokemonTypeApiToPokemonType(pokemonTypeApi);
  }
}
