import { Pokemon } from "../../model/IPokemon";

export interface IGetPokemonByRegion {
	execute(region: string): Promise<Pokemon[]>;
}

//el puerto de entrada, que es llamado por el controller y no por el caso de uso, es llamar indirectamente al caso de uso
