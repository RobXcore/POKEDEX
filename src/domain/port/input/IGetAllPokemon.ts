import { Pokemon } from "../../model/IPokemon";

export interface IGetAllPokemon {
  execute(): Pokemon;
}
