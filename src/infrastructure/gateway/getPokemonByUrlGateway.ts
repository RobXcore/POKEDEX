import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import PokemonApiToPokemonMapper from "./mapper/PokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";

export class GetPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  async execute(url: string): Promise<Pokemon> {
    const responseApi = await fetch(url);
    const pokemonApi = (await responseApi.json()) as PokemonApi;

    return PokemonApiToPokemonMapper(pokemonApi);
  }
}
