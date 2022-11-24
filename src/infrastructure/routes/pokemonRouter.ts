import { Router } from "express";
import { pokemonC } from "../factory/pokemonControllerFactory";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", async (_req, res) => {
  res.send(await pokemonC.getAllPokemon());
});

export default pokemonRouter;
