import { GetAllPokemonUseCase } from "../../domain/usecase/getAllPokemonUseCase";
import { GetPokemonListGateway } from "../gateway/getPokemonListGateway";
import { GetPokemonByUrlGateway } from "../gateway/getPokemonByUrlGateway";
import { GetPokemonByIdGateway } from "../gateway/getPokemonByIdGateway";
import { GetPokemonByIdUseCase } from "../../domain/usecase/getPokemonByIdUseCase";
import { PokemonController } from "../controller/pokemonController";
import { GetPokemonByTypeUseCase } from "../../domain/usecase/GetPokemonByTypeUseCase";
import { GetPokemonTypeGateway } from "../gateway/GetPokemonTypeGateway";
import { GetPokemonByRegionUseCase } from "../../domain/usecase/getPokemonByRegionUseCase";
import { GetAllPokemonByRegionGateway } from "../gateway/GetAllPokemonByRegionGateway";
import { GetPokemonByRegionGateway } from "../gateway/GetPokemonByRegionGateway";

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

const gateway = new GetPokemonByRegionGateway();
const allGateway = new GetAllPokemonByRegionGateway();
const getPokemonByRegionuseCase = new GetPokemonByRegionUseCase(gateway, allGateway);

export const pokemonController = new PokemonController(
	getAllPokemonUseCase,
	getPokemonByIdUseCase,
	getPokemonByTypeUseCase,
	getPokemonByRegionuseCase
);
