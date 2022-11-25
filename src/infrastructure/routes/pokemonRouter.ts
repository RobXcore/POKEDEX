import { Router } from "express";
import { pokemonController } from "../factory/pokemonControllerFactory";
import { MessagesToErrorResponseMapper } from "../controller/mapper/MessagesToErrorResponseMapper";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/all", async (req, res) => {
  let requestOffset;

  if (!req.query.offset) {
    requestOffset = 0;
  } else {
    requestOffset = +req.query.offset;
  }

  if (isNaN(requestOffset)) {
    res.statusCode = 400;
    res.send(MessagesToErrorResponseMapper(["El offset debe ser numérico"]));
  } else {
    res.send(await pokemonController.getAllPokemon(requestOffset));
  }
});

export default pokemonRouter;
