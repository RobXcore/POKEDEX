import { TypeApi } from '../../../infrastructure/gateway/model/IPokemonTypeApi';

export interface IGetPokemonTypeGateway {
    execute(typeNameOrId: string): Promise<TypeApi>;
}