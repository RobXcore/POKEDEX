import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByType } from "../port/input/IGetPokemonByType";
import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../port/output/IGetPokemonTypeGateway";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";
import { PokemonType } from "../model/IPokemonType";

export class GetPokemonByTypeUseCase implements IGetPokemonByType {
  constructor(
    private readonly IGetPokemonTypeGateway: IGetPokemonTypeGateway,
    private readonly IGetPokemonByUrlGateway: IGetPokemonByUrlGateway
  ) {}

  async execute(typeNameOrId: string): Promise<Pokemon[]> {
    const pokemonType: PokemonType =
        await this.IGetPokemonTypeGateway.execute(typeNameOrId);

      const typePokemon: Pokemon[] = await Promise.all(
        pokemonType.pokemonList.map(
          async (pokemon) =>
            await this.IGetPokemonByUrlGateway.execute(pokemon.url)
        )
      );
      
      return typePokemon;
  }
}