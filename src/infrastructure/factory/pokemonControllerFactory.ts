import { GetAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/getPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { PokemonController } from "../controller/pokemonController";

const getPokemonListGateway = new GetPokemonListGateway();
const getPokemonByUrlGateway = new GetPokemonByUrlGateway();
const getAllPokemonUseCase = new GetAllPokemonUseCase(
  getPokemonListGateway,
  getPokemonByUrlGateway
);

export const pokemonController = new PokemonController(getAllPokemonUseCase);
