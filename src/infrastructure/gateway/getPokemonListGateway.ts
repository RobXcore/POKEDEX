import { IGetPokemonListGateway } from "../../domain/port/output/IGetPokemonListGateway";

export class getPokemonListGateway implements IGetPokemonListGateway {
  execute(): string {
    throw new Error("Method not implemented.");
  }
}
