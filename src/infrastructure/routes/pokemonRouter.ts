import { Router } from "express";
import { Handler } from "../controller/exceptionHandler/handler";
import { controller, regionRoute } from "../factory/pokemonByRegionFactory";
import { pokemonController } from "../factory/pokemonControllerFactory";
const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));
regionRoute.get("/region/:region", Handler(controller.getPokemonByRegionController));

export default pokemonRouter;
