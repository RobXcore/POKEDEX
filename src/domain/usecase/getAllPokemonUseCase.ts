import { Pokemon } from "../model/IPokemon";
import { IGetAllPokemon } from "../port/input/IGetAllPokemon";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";
import { IGetPokemonListGateway } from "../port/output/IGetPokemonListGateway";

export class GetAllPokemonUseCase implements IGetAllPokemon {
  constructor(
    private readonly IGetPokemonList: IGetPokemonListGateway,
    private readonly IGetPokemonByUrlGateway: IGetPokemonByUrlGateway
  ) {}

  async execute(offset: number): Promise<Pokemon[]> {
    const pokemonList = await this.IGetPokemonList.execute(offset);

    const allPokemon = await Promise.all(
      pokemonList.results.map(
        async (pokemon) =>
          await this.IGetPokemonByUrlGateway.execute(pokemon.url)
      )
    );

    return allPokemon;
  }
}
