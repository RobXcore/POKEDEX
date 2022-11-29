import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";
import { IGetPokemonByType } from "../../domain/port/input/IGetPokemonByType";

export class PokemonController {
  constructor(
    private readonly IGetAllPokemon: IGetAllPokemon,
    private readonly IGetPokemonByType: IGetPokemonByType
  ) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemonByType = this.getPokemonByType.bind(this);
  }

  async getAllPokemon(offset: number) {
    return AllPokemonToAllPokemonResponse(
      await this.IGetAllPokemon.execute(offset)
    );
  }

  async getPokemonByType(type: string | number) {
    await this.IGetPokemonByType.execute(type);
  }
}
