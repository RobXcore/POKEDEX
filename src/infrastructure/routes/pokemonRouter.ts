import { Router } from "express";
import { Handler } from "../controller/exceptionHandler/handler";
import { pokemonController } from "../factory/pokemonControllerFactory";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));

pokemonRouter.get("/pokemon/:id", async (_req, res) => {
  const {id} = _req.params;
  res.send(await pokemonController.getPokemonById(Number(id)));
});

export default pokemonRouter;
