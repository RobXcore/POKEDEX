import { Ability, AbilityApi, Pokemon, Type, TypeApi } from "../../domain/model/IPokemon";

const PokemonApiToPokemonMapper = (json: any) => {
	const pokemon: Pokemon = {
		name: json.name,
		height: json.height,
		weight: json.weight,
		frontSprite: json.sprites.front_default,
		types: TypeMapper(json.types),
		abilities: AbilityMapper(json.abilities)
	};

	return pokemon;
};

const TypeMapper = (types: TypeApi[]) => {
	/*types = [
		{slot:1, type:{name:'name', url:'url',
		{slot:2, type:{name:'name', url:'url'}
	]*/
	const typeData = types.map((dataType) => {
		const typeObject: Type = {
			name: dataType.type.name,
			url: dataType.type.url
		};
		return typeObject;
	});

	return typeData;
};

const AbilityMapper = (abilities: AbilityApi[]) => {
	/*
	abilities = [
		{ability:{name:'name', url:'url'}}
	]
	*/
	const abilityData = abilities.map((abilityType) => {
		const abilityObject: Ability = {
			name: abilityType.ability.name,
			url: abilityType.ability.url
		};
		return abilityObject;
	});

	return abilityData;
};

export default PokemonApiToPokemonMapper;
