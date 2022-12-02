import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByIdGateway } from "../../domain/port/output/IGetPokemonByIdGateway";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";
import FetchClientUtil from "./util/FetchClientUtil";

export class GetPokemonByIdGateway implements IGetPokemonByIdGateway {
  
    URL_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

    async execute(id: number): Promise<Pokemon> {
      const responseApi = await FetchClientUtil.get(this.URL_GET_POKEMON+id);
      const pokemonApi = responseApi as PokemonApi;
  
      return PokemonApiToPokemonMapper(pokemonApi);
    }
}