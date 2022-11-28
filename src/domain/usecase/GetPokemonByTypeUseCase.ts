import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByType } from "../port/input/IGetPokemonByType";
import { IGetPokemonByTypeGateway } from "../port/output/IGetPokemonByTypeGateway";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";

export class GetPokemonByTypeUseCase implements IGetPokemonByType {
  constructor(
    private readonly IGetPokemonByTypeGateway: IGetPokemonByTypeGateway,
    private readonly IGetPokemonByUrlGateway: IGetPokemonByUrlGateway
  ) {}
  // TODO: implementar caso de uso

  async execute(type: string | number): Promise<Pokemon[]> {
    const pokemonType = await this.IGetPokemonByTypeGateway.execute(type);
    const typePokemon = await Promise.all(
      pokemonType.pokemon.map(
        async (pokemon) =>
          await this.IGetPokemonByUrlGateway.execute(pokemon.url)
      )
    );
    return typePokemon;
  }
}