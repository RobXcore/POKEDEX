"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler_1 = require("../controller/exceptionHandler/handler");
const pokemonControllerFactory_1 = require("../factory/pokemonControllerFactory");
const pokemonRouter = (0, express_1.Router)();
pokemonRouter.get("/pokemon/all", (0, handler_1.Handler)(pokemonControllerFactory_1.pokemonController.getAllPokemon));
pokemonRouter.get("/pokemon/region/:region", (0, handler_1.Handler)(pokemonControllerFactory_1.pokemonController.getPokemonByRegion));
pokemonRouter.get("/pokemon/:id", (0, handler_1.Handler)(pokemonControllerFactory_1.pokemonController.getPokemonById));
pokemonRouter.get("/pokemon/type/:type", (0, handler_1.Handler)(pokemonControllerFactory_1.pokemonController.getPokemonByType));
exports.default = pokemonRouter;
//# sourceMappingURL=pokemonRouter.js.map