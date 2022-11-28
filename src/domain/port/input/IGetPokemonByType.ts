import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByType {
    execute(type: string | number): Promise<Pokemon[]>
}