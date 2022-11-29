import { Pokemon, Type } from "../../domain/model/IPokemon";

const PokemonApiToPokemonMapper = (json: any) => {
	const pokemon: Pokemon = {
		name: json.name,
		height: json.height,
		weight: json.weight,
		frontSprite: json.sprites.front_default,
		types: TypeMapper(json.types),
		abilities: json.abilities
	};

	return pokemon;
};

const TypeMapper = (types: Type[]) => {
	/*types = [
		{slot:1, type:{name:'name', url:'url',
		{slot:2, type:{name:'name', url:'url'}
	]*/
	const typeData = types.map((dataType) => {
		const typeObject: Type = {
			name: dataType.type.name,
			url: dataType.url
		};
		return typeObject;
	});

	return typeData;
};

export default PokemonApiToPokemonMapper;
