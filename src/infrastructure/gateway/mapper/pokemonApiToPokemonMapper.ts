import { Ability, Pokemon, Type } from "../../../domain/model/IPokemon";
import { AbilityApi, PokemonApi, TypeApi } from "../model/IPokemonApi";

const pokemonApiToPokemonMapper = (pokemonApi: PokemonApi) => {
  const { name, height, weight, types, abilities, sprites } = pokemonApi;

  const pokemon: Pokemon = {
    name: name,
    height: height,
    weight: weight,
    frontSprite: sprites.front_default,
    types: typeMapper(types),
    abilities: abilityMapper(abilities),
  };

  return pokemon;
};

const abilityMapper = (abilities: AbilityApi[]) => {
  const abilitiesData = abilities.map((dataAbility) => {
    const abilityObject: Ability = {
      name: dataAbility.ability.name,
      url: dataAbility.ability.url,
    };
    return abilityObject;
  });

  return abilitiesData;
};

const typeMapper = (types: TypeApi[]) => {
  const typesData = types.map((dataType) => {
    const typeObject: Type = {
      name: dataType.type.name,
      url: dataType.type.url,
    };
    return typeObject;
  });

  return typesData;
};

export default pokemonApiToPokemonMapper;
