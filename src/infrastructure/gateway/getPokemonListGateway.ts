import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";
import { PokemonListApi } from "./model/IPokemonListApi";

export class GetPokemonListGateway implements IGetPokemonListGateway {
  URL_GET_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=2000";

  async execute(): Promise<PokemonList> {
    const responseApi = await fetch(this.URL_GET_POKEMON_LIST);
    const pokemonListApi = (await responseApi.json()) as PokemonListApi;

    const { results } = pokemonListApi;
    const pokemonList: PokemonList = {
      results: results,
    };

    return pokemonList;
  }
}
