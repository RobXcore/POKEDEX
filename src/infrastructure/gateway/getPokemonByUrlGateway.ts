import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import pokemonApiToPokemonMapper from "./mapper/pokemonApiToPokemonMapper";
import { PokemonApi } from "./model/IPokemonApi";

export class getPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  async execute(url: string): Promise<Pokemon> {
    const pokemonApi = fetch(url)
      .then((response) => response.json())
      .then((response) => response as PokemonApi);

    return pokemonApiToPokemonMapper(await pokemonApi);
  }
}
