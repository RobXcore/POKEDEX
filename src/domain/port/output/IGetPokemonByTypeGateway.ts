import { Pokemon } from '../../model/IPokemon';

export interface IGetPokemonByTypeGateway {
    execute(type: string): Promise<Pokemon>;
}