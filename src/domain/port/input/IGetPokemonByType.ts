import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByType {
    execute(type: string): Promise<Pokemon[]>
}