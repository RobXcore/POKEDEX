import { Pokemon } from "../model/IPokemon";
import { IGetAllPokemon } from "../port/input/IGetAllPokemon";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";
import { IGetPokemonListGateway } from "../port/output/IGetPokemonListGateway";

export class GetAllPokemonUseCase implements IGetAllPokemon {
  constructor(
    private readonly IGetPokemonList: IGetPokemonListGateway,
    private readonly IGetPokemonByUrl: IGetPokemonByUrlGateway
  ) {}

  async execute(): Promise<Pokemon[]> {
    const pokemonList = await this.IGetPokemonList.execute();

    const allPokemon = await Promise.all(
      pokemonList.results.map(
        async (pokemon) => await this.IGetPokemonByUrl.execute(pokemon.url)
      )
    );

    return allPokemon;
  }
}
