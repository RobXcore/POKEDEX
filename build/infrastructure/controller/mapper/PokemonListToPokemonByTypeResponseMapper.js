"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonListToPokemonByTypeResponse = (pokemon) => {
    const pokemonByType = {
        count: pokemon.length,
        pokemon: pokemon,
    };
    return pokemonByType;
};
exports.default = PokemonListToPokemonByTypeResponse;
//# sourceMappingURL=PokemonListToPokemonByTypeResponseMapper.js.map