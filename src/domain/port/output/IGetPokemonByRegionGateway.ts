export interface IGetPokemonByRegionGateway {
	execute(region: string, offset: number, limit: number): Promise<any>;
}
