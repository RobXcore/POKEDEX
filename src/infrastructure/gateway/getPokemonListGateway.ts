import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";
import { PokemonListApiToPokemonListMapper } from "./mapper/PokemonListApiToPokemonListMapper";
import { PokemonListApi } from "./model/IPokemonListApi";
import FetchClientUtil from "./util/FetchClientUtil";

const URL_GET_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=";

export class GetPokemonListGateway implements IGetPokemonListGateway {
  async execute(offset: number): Promise<PokemonList> {
    const responseApi = await FetchClientUtil.get(URL_GET_POKEMON_LIST + offset);
    const pokemonListApi = responseApi as PokemonListApi;

    return PokemonListApiToPokemonListMapper(pokemonListApi);
  }
}
