"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonApiToPokemonMapper = (pokemonApi) => {
    const { name, height, weight, types, abilities, sprites } = pokemonApi;
    const pokemon = {
        name: name,
        height: height,
        weight: weight,
        frontSprite: sprites.front_default,
        types: typeMapper(types),
        abilities: abilityMapper(abilities),
    };
    return pokemon;
};
const abilityMapper = (abilities) => {
    const abilitiesData = abilities.map((dataAbility) => {
        const abilityObject = {
            name: dataAbility.ability.name,
            url: dataAbility.ability.url,
        };
        return abilityObject;
    });
    return abilitiesData;
};
const typeMapper = (types) => {
    const typesData = types.map((dataType) => {
        const typeObject = {
            name: dataType.type.name,
            url: dataType.type.url,
        };
        return typeObject;
    });
    return typesData;
};
exports.default = PokemonApiToPokemonMapper;
//# sourceMappingURL=pokemonApiToPokemonMapper.js.map