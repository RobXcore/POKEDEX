import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";

export class pokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  getAllPokemon() {
    return this.IGetAllPokemon.execute();
  }
}
