import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import PokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";
import FetchClientUtil from "./util/FetchClientUtil";

export class GetPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  async execute(url: string): Promise<Pokemon> {
    const responseApi = await FetchClientUtil.get(url);
    const pokemonApi = responseApi as PokemonApi;

    return PokemonApiToPokemonMapper(pokemonApi);
  }
}
