import { Ability, Pokemon, ShortType } from "../../../domain/model/IPokemon";
import { AbilityApi, PokemonApi, ShortTypeApi } from "../model/IPokemonApi";

const PokemonApiToPokemonMapper = (pokemonApi: PokemonApi) => {
  const { name, height, weight, types, abilities, sprites } = pokemonApi;

  const pokemon: Pokemon = {
    name: name,
    height: height,
    weight: weight,
    frontSprite: sprites.front_default == null ? "" : sprites.front_default,
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

const typeMapper = (types: ShortTypeApi[]) => {
  const typesData = types.map((dataType) => {
    const typeObject: ShortType = {
      name: dataType.type.name,
      url: dataType.type.url,
    };
    return typeObject;
  });

  return typesData;
};

export default PokemonApiToPokemonMapper;
