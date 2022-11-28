import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByIdGateway{
  execute(id: number): Promise<Pokemon>;
}