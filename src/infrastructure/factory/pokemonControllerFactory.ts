import { getAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { getPokemonListGateway } from "../gateway/getPokemonListGateway";
import { getPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { pokemonController } from "../controller/pokemonController";

const getPokemonListG = new getPokemonListGateway();
const getPokemonByUrlG = new getPokemonByUrlGateway();
const getAllPokemonUC = new getAllPokemonUseCase(
  getPokemonListG,
  getPokemonByUrlG
);

export const pokemonC = new pokemonController(getAllPokemonUC);
