import { Router } from "express";
import { Handler } from "../controller/exceptionHandler/handler";
import { pokemonController } from "../factory/pokemonControllerFactory";
const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));

pokemonRouter.get("/pokemon/type/:type", Handler(pokemonController.getPokemonByType));

export default pokemonRouter;