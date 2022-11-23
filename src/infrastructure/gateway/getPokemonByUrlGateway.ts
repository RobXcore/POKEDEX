import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByUrlGateway } from "../../domain/port/output/IGetPokemonByUrlGateway";
import { PokemonApi } from "./model/IPokemonApi";

export class getPokemonByUrlGateway implements IGetPokemonByUrlGateway {
  async execute(url: string): Promise<Pokemon> {
    const data = fetch(url)
      .then((response) => response.json())
      .then((response) => response as PokemonApi);

    const { name, height, weight, types, abilities, sprites } = await data;

    const pokemon: Pokemon = {
      name: name,
      height: height,
      weight: weight,
      frontSprite: sprites.front_default,
      types: types,
      abilities: abilities,
    };

    return pokemon;
  }
}
