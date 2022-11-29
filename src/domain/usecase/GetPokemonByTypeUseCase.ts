import { TypeApi } from "../../infrastructure/gateway/model/IPokemonTypeApi";
import { Pokemon, NameUrl } from "../model/IPokemon";
import { IGetPokemonByType } from "../port/input/IGetPokemonByType";
import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../port/output/IGetPokemonTypeGateway";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";

export class GetPokemonByTypeUseCase implements IGetPokemonByType {
  constructor(
    private readonly IGetPokemonTypeGateway: IGetPokemonTypeGateway,
    private readonly IGetPokemonByUrlGateway: IGetPokemonByUrlGateway
  ) {}

  async execute(type: string | number): Promise<Pokemon[]> {
    const pokemonType: TypeApi = await this.IGetPokemonTypeGateway.execute(
      type
    );
    const typePokemon: Pokemon[] = await Promise.all(
      pokemonType.pokemon.map(
        async (pokemon: NameUrl) =>
          await this.IGetPokemonByUrlGateway.execute(pokemon.url)
      )
    );
    return typePokemon;
  }
}
