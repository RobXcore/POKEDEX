import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByType {
    execute(typeNameOrId: string): Promise<Pokemon[]>
}