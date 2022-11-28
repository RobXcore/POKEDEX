export interface IGetPokemonByRegionGateway {
	execute(url: string): Promise<any>;
}
