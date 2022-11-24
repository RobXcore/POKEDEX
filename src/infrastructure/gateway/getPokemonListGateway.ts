import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";
import { PokemonListApi } from "./model/IPokemonListApi";

export class getPokemonListGateway implements IGetPokemonListGateway {
  async execute(): Promise<PokemonList> {
    const responseApi = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=2000"
    );
    const pokemonListApi = (await responseApi.json()) as PokemonListApi;

    const { results } = pokemonListApi;
    const pokemonList: PokemonList = {
      results: results,
    };

    return pokemonList;
  }
}
