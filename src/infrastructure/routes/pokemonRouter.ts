import { Router } from "express";
import { Handler } from "../controller/exceptionHandler/handler";
import { pokemonController } from "../factory/pokemonControllerFactory";
const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));

pokemonRouter.get("/pokemon/type/:type", async (req, res) => {
  res.send(await pokemonController.getPokemonByType(req.params.type));
});

export default pokemonRouter;
