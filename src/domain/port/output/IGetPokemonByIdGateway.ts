import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByUrlGateway {
  execute(id: number): Promise<Pokemon>;
}