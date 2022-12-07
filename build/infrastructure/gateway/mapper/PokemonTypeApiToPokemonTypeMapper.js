"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTypeApiToPokemonType = void 0;
const PokemonTypeApiToPokemonType = (pokemonTypeApi) => {
    const { id, name, pokemon } = pokemonTypeApi;
    const pokemonList = pokemon.map((pokemonObject) => pokemonObject.pokemon);
    const pokemonType = {
        id: id,
        name: name,
        pokemonList: pokemonList,
    };
    return pokemonType;
};
exports.PokemonTypeApiToPokemonType = PokemonTypeApiToPokemonType;
//# sourceMappingURL=PokemonTypeApiToPokemonTypeMapper.js.map