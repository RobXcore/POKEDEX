import { Pokemon } from "../model/IPokemon";
import { IGetPokemonById } from "../port/input/IGetPokemonById";
import { IGetPokemonByIdGateway } from "../port/output/IGetPokemonByIdGateway";

export class GetPokemonByIdUseCase implements IGetPokemonById {
  constructor(
    private readonly IGetPokemonById: IGetPokemonByIdGateway
  ) {}

  async execute(id:number): Promise<Pokemon> {
    const pokemon = await this.IGetPokemonById.execute(id);
    return pokemon;
  }
}