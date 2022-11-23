import { Pokemon } from "../model/IPokemon";
import { IGetAllPokemon } from "../port/input/IGetAllPokemon";
import { IGetPokemonListGateway } from "../port/output/IGetPokemonListGateway";

export class getAllPokemonUseCase implements IGetAllPokemon {
  constructor(private readonly IGetPokemonList: IGetPokemonListGateway) {}

  execute(): Pokemon {
    this.IGetPokemonList.execute();
    throw new Error("Method not implemented.");
  }
}
