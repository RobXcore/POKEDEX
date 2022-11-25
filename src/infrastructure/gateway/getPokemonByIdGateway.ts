import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByIdGateway } from "../../domain/port/output/IGetPokemonByIdGateway";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";

export class GetPokemonByIdGateway implements IGetPokemonByIdGateway {
  
    URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

    async execute(id: number): Promise<Pokemon> {
      const responseApi = await fetch(this.URL_GET_POKEMON+id);
      const pokemonApi = (await responseApi.json()) as PokemonApi;
  
      return PokemonApiToPokemonMapper(pokemonApi);
    }
}