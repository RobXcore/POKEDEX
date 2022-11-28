import { Router } from "express";
import { GetPokemonByRegionUseCase } from "../../domain/usecase/getPokemonByRegionUseCase";
import { GetPokemonByRegionController } from "../controller/GetPokemonByRegionController";
import { GetPokemonByRegionGateway } from "../gateway/GetPokemonByRegionGateway";

const gateway = new GetPokemonByRegionGateway();
const useCase = new GetPokemonByRegionUseCase(gateway);
const controller = new GetPokemonByRegionController(useCase);
const regionRoute = Router();
regionRoute.get("/region/:region", controller.getPokemonByRegion);
export default regionRoute;
