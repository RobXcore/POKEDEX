import { IGetAllPokemon } from "../../domain/port/input/IGetAllPokemon";
import { IGetPokemonById } from "../../domain/port/input/IGetPokemonById";
import AllPokemonToAllPokemonResponse from "./mapper/allPokemonToAllPokemonResponseMapper";

export class PokemonController {
  constructor(private readonly IGetAllPokemon: IGetAllPokemon, private readonly IGetPokemonById: IGetPokemonById ) {
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
  }

  async getAllPokemon() {
    return AllPokemonToAllPokemonResponse(await this.IGetAllPokemon.execute());
  }

  async getPokemonById(id : number) {
    return await this.IGetPokemonById.execute(id);
  }
}
