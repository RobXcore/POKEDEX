import { PokemonList } from "../../model/IPokemonList";

export interface IGetPokemonByRegionGateway {
	execute(limit: number, offset: number): Promise<PokemonList>;
}
