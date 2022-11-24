import { Router } from "express";
import { pokemonController } from "../factory/PokemonControllerFactory";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", async (_req, res) => {
  res.send(await pokemonController.getAllPokemon());
});

export default pokemonRouter;
