import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByType } from "../port/input/IGetPokemonByType";


export class GetPokemonByTypeUseCase implements IGetPokemonByType {
    
    // TODO: implementar caso de uso
    
    execute(type: string): Promise<Pokemon[]> {
        throw new Error("Method not implemented.");
    }

}