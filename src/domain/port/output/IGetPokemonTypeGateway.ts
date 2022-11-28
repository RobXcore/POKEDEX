import { TypeApi } from '../../../infrastructure/gateway/model/IPokemonTypeApi';

export interface IGetPokemonTypeGateway {
    execute(type: string | number): Promise<TypeApi>;
}