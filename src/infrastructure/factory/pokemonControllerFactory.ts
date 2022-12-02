import { GetAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/getPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { GetPokemonByIdGateway } from "../gateway/getPokemonByIdGateway";
import { GetPokemonByIdUseCase } from "../../domain/usecase/getPokemonByIdUseCase";
import { PokemonController } from "../controller/pokemonController";
import { GetPokemonByTypeUseCase } from "../../domain/usecase/GetPokemonByTypeUseCase";
import { GetPokemonTypeGateway } from "../gateway/GetPokemonTypeGateway";

const getPokemonListGateway = new GetPokemonListGateway();
const getPokemonByUrlGateway = new GetPokemonByUrlGateway();
const getPokemonTypeGateway = new GetPokemonTypeGateway();
const getPokemonByIdGateway = new GetPokemonByIdGateway();
const getAllPokemonUseCase = new GetAllPokemonUseCase(
  getPokemonListGateway,
  getPokemonByUrlGateway
);
const getPokemonByIdUseCase = new GetPokemonByIdUseCase(getPokemonByIdGateway);
const getPokemonByTypeUseCase = new GetPokemonByTypeUseCase(
  getPokemonTypeGateway,
  getPokemonByUrlGateway
);

export const pokemonController = new PokemonController(
  getAllPokemonUseCase,
  getPokemonByIdUseCase,
  getPokemonByTypeUseCase
);