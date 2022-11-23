import { Router } from "express";
import { pokemonC } from "../factory/pokemonControllerFactory";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", (_req, res) => {
  res.send(pokemonC.getAllPokemon());
});

export default pokemonRouter;
