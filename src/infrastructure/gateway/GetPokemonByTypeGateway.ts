import { IGetPokemonByTypeGateway } from "../../domain/port/output/IGetPokemonByTypeGateway";
import { TypeApi } from "./model/IPokemonTypeApi";

export class GetPokemonByTypeGateway implements IGetPokemonByTypeGateway {
    execute(type: string | number): Promise<TypeApi> {
        throw new Error("Method not implemented.");
    }
}