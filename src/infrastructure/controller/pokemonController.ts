import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import allPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

export class pokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  async getAllPokemon() {
    return allPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute());
  }
}
