import PokemonApiToPokemonMapper from "../infrastructure/gateway/mapper/pokemonApiToPokemonMapper";
import { Ability, Pokemon, ShortType } from "../domain/model/IPokemon";
import { AbilityApi, PokemonApi, ShortTypeApi, Sprite } from "../infrastructure/gateway/model/IPokemonApi";

const abilityMock: Ability[] = [
  {
    name: "some-ability",
    url: "some-url",
  },
];

const shortTypeMock: ShortType[] = [
  {
    name: "some-type",
    url: "some-url",
  },
];

const iPokemonMock: Pokemon = {
  name: "some-name",
  height: 1,
  weight: 2,
  types: shortTypeMock,
  abilities: abilityMock,
  frontSprite: "some-url",
};

const ability: Ability = {
  name: "some-ability",
  url: "some-url",
};

const abilityApiMock: AbilityApi[] = [
  {
    slot: 1,
    ability: ability,
  },
];

const shortType: ShortType = {
  name: "some-name",
  url: "some-url",
};

const shortTypeApiMock: ShortTypeApi[] = [
  {
    slot: 1,
    type: shortType,
  },
];

const spriteMock: Sprite = {
  front_default: "some-front",
};

const pokemonApiMock: PokemonApi = {
  name: "some-name",
  height: 1,
  weight: 2,
  frontSprite: "some-sprite",
  types: shortTypeApiMock,
  abilities: abilityApiMock,
  sprites: spriteMock,
};

describe("mapper pokemon", () => {
  test("mapper", () => {
    const result = PokemonApiToPokemonMapper(pokemonApiMock);
    expect(result).toBe(iPokemonMock);
  });
});
