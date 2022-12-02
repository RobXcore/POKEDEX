import { GetAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/getPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { GetPokemonByIdGateway } from "../gateway/getPokemonByIdGateway";
import { PokemonController } from "../controller/pokemonController";
import { GetPokemonByIdUseCase } from "../../domain/usecase/getPokemonByIdUseCase";

const getPokemonListGateway = new GetPokemonListGateway();
const getPokemonByUrlGateway = new GetPokemonByUrlGateway();
const getPokemonByIdGateway = new GetPokemonByIdGateway();
const getAllPokemonUseCase = new GetAllPokemonUseCase(
  getPokemonListGateway,
  getPokemonByUrlGateway
);
const getPokemonByIdUseCase = new GetPokemonByIdUseCase(
  getPokemonByIdGateway
);

export const pokemonController = new PokemonController(getAllPokemonUseCase, getPokemonByIdUseCase);
