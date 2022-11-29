export interface IGetPokemonByRegionGateway {
	execute(limit: number, offset: number): Promise<any>;
}
