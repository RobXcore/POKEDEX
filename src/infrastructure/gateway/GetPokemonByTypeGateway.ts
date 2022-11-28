import { Pokemon } from "../../domain/model/IPokemon";
import { IGetPokemonByTypeGateway } from "../../domain/port/output/IGetPokemonByTypeGateway";

export class GetPokemonByTypeGateway implements IGetPokemonByTypeGateway {
    execute(type: string): Promise<Pokemon> {
        throw new Error("Method not implemented.");
    }
}