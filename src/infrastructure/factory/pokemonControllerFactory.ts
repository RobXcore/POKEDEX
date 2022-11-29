import { GetAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/getPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { PokemonController } from "../controller/pokemonController";
import { GetPokemonByTypeUseCase } from '../../domain/usecase/GetPokemonByTypeUseCase';
import { GetPokemonTypeGateway } from '../gateway/GetPokemonTypeGateway';

const getPokemonListGateway = new GetPokemonListGateway();
const getPokemonByUrlGateway = new GetPokemonByUrlGateway();
const getPokemonTypeGateway = new GetPokemonTypeGateway();
const getAllPokemonUseCase = new GetAllPokemonUseCase(
  getPokemonListGateway,
  getPokemonByUrlGateway
);
const getPokemonByTypeUseCase = new GetPokemonByTypeUseCase(
  getPokemonTypeGateway,
  getPokemonByUrlGateway
)

export const pokemonController = new PokemonController(getAllPokemonUseCase, getPokemonByTypeUseCase);
