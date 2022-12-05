import { PokemonType } from '../../model/IPokemonType';

export interface IGetPokemonTypeGateway {
    execute(typeNameOrId: string): Promise<PokemonType>;
}