import { GetAllPokemonUseCase } from "../../domain/usecase/GetAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/GetPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/GetPokemonByUrlGateway";
import { PokemonController } from "../controller/PokemonController";

const getPokemonListGateway = new GetPokemonListGateway();
const getPokemonByUrlGateway = new GetPokemonByUrlGateway();
const getAllPokemonUseCase = new GetAllPokemonUseCase(
  getPokemonListGateway,
  getPokemonByUrlGateway
);

export const pokemonController = new PokemonController(getAllPokemonUseCase);
