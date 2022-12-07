"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonListApiToPokemonListMapper = void 0;
const PokemonListApiToPokemonListMapper = (pokemonListApi) => {
    const { results } = pokemonListApi;
    const pokemonList = {
        results: results,
    };
    return pokemonList;
};
exports.PokemonListApiToPokemonListMapper = PokemonListApiToPokemonListMapper;
//# sourceMappingURL=PokemonListApiToPokemonListMapper.js.map