import { PokemonList } from "../../model/IPokemonList";

export interface IGetPokemonListGateway {
  execute(): Promise<PokemonList>;
}
