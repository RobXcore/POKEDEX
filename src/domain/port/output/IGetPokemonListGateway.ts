import { PokemonList } from "../../model/IPokemonList";

export interface IGetPokemonListGateway {
  execute(offset: number): Promise<PokemonList>;
}
