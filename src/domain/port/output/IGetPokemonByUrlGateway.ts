import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByUrlGateway {
  execute(url: string): Promise<Pokemon>;
}
