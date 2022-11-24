import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import AllPokemonToAllPokemonResponse from "./mapper/AllPokemonToAllPokemonResponseMapper";

export class PokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  async getAllPokemon() {
    return AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute());
  }
}
