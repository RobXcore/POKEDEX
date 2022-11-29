import { Pokemon, Type, Ability } from "../../domain/model/IPokemon";

const PokemonApiToPokemonMapper = (json: any) => {
	const pokemon: Pokemon = {
		name: json.name,
		height: json.height,
		weight: json.weight,
		frontSprite: json.sprites.front_default,
		types: TypeMapper,
		abilities: json.abilities
	};

	return pokemon;
};

const TypeMapper = (json: any) => {
	const type: Type = {
		name: json.types.name,
		url: json.types.url
	};
};

export default PokemonApiToPokemonMapper;
