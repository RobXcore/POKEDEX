import { Pokemon } from "../../model/IPokemon";

export interface IGetAllPokemon {
  execute(offset: number): Promise<Pokemon[]>;
}
