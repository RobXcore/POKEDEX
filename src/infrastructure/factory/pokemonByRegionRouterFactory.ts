import { GetPokemonByRegionUseCase } from "../../domain/usecase/getPokemonByRegionUseCase";
import { GetPokemonByRegionController } from "../controller/GetPokemonByRegionController";
import { GetAllPokemonByRegionGateway } from "../gateway/GetAllPokemonByRegionGateway";
import { GetPokemonByRegionGateway } from "../gateway/GetPokemonByRegionGateway";

const gateway = new GetPokemonByRegionGateway();
const allGateway = new GetAllPokemonByRegionGateway();
const useCase = new GetPokemonByRegionUseCase(gateway, allGateway);
export const controller = new GetPokemonByRegionController(useCase);
