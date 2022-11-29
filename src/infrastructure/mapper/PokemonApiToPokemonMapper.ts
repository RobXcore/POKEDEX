import { Pokemon } from "../../domain/model/IPokemon";

const PokemonApiToPokemonMapper = (json: any) => {
	const pokemon: Pokemon = {
		name: json.name,
		height: json.height,
		weight: json.weight
	};

	return pokemon;
};

export default PokemonApiToPokemonMapper;
