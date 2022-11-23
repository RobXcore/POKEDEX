import { getAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { getPokemonListGateway } from "../gateway/getPokemonListGateway";
import { pokemonController } from "../controller/pokemonController";

const getPokemonListG = new getPokemonListGateway();
const getAllPokemonUC = new getAllPokemonUseCase(getPokemonListG);

export const pokemonC = new pokemonController(getAllPokemonUC);
