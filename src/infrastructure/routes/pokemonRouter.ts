import { Router } from "express";
import { Handler } from "../controller/exceptionHandler/handler";
import { controller } from "../factory/pokemonByRegionRouterFactory";
import { pokemonController } from "../factory/pokemonControllerFactory";
const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));
pokemonRouter.get("/region/:region", Handler(controller.getPokemonByRegionController));

export default pokemonRouter;
