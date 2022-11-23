import { PokemonList } from "../../domain/model/IPokemonList";
import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";
import { PokemonListApi } from "./model/IPokemonListApi";

export class getPokemonListGateway implements IGetPokemonListGateway {
  async execute(): Promise<PokemonList> {
    const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((response) => response.json())
      .then((response) => response as PokemonListApi);

    const { results } = await data;

    const pokemonList: PokemonList = {
      results: results,
    };

    return pokemonList;
  }
}
