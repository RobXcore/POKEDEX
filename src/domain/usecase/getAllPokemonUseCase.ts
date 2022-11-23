import { Pokemon } from "../model/IPokemon";
import { IGetAllPokemon } from "../port/input/IGetAllPokemon";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";
import { IGetPokemonListGateway } from "../port/output/IGetPokemonListGateway";

export class getAllPokemonUseCase implements IGetAllPokemon {
  constructor(
    private readonly IGetPokemonList: IGetPokemonListGateway,
    private readonly IGetPokemonByUrl: IGetPokemonByUrlGateway
  ) {}
  async execute(): Promise<Pokemon[]> {
    const pokemonList = await this.IGetPokemonList.execute();
    const allPokemon = pokemonList.results.map(
      async (pokemon) => await this.IGetPokemonByUrl.execute(pokemon.url)
    );

    console.log(allPokemon);

    throw new Error("Method not implemented.");
  }
}
