import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonById {
  execute(id: number): Promise<Pokemon>;
}