import { Router } from "express";
<<<<<<< HEAD
import { pokemonController } from "../factory/pokemonControllerFactory";

=======
import { Handler } from "../controller/exceptionHandler/handler";
import { pokemonController } from "../factory/pokemonControllerFactory";
>>>>>>> 476d413892269318b4adb4f3801570264165c63b
const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", Handler(pokemonController.getAllPokemon));

pokemonRouter.get("/pokemon/:id", async (_req, res) => {
  const {id} = _req.params;
  res.send(await pokemonController.getPokemonById(Number(id)));
});

export default pokemonRouter;
