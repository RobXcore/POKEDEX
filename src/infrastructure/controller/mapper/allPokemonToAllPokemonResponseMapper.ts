import { Pokemon } from "../../../domain/model/IPokemon";
import { AllPokemonResponse } from "../model/IAllPokemon";

const AllPokemonToAllPokemonResponse = (pokemon: Pokemon[]) => {
  const allPokemon: AllPokemonResponse = {
    allPokemon: pokemon,
  };
  return allPokemon;
};

export default AllPokemonToAllPokemonResponse;
