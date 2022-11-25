import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

export class PokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  async getAllPokemon(offset: number) {
    return AllPokemonToAllPokemonResponse(
      await this.IGetAllPokemon.execute(offset)
    );
  }
}
