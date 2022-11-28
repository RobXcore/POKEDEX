import { TypeApi } from '../../../infrastructure/gateway/model/IPokemonTypeApi';

export interface IGetPokemonByTypeGateway {
    execute(type: string | number): Promise<TypeApi>;
}