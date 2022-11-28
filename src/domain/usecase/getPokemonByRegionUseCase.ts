import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByRegion } from "../port/input/IGetPokemonByRegion";

export class GetPokemonByRegionUseCase implements IGetPokemonByRegion {
	constructor () {}
	execute (): Promise<Pokemon[]> {
		throw new Error("Method not implemented.");
	}
	regions = {
		//UseCase?
		kanto: [ 0, 151 ],
		johto: [ 151, 251 ],
		hoenn: [ 251, 386 ],
		sinnoh: [ 386, 493 ],
		unova: [ 493, 649 ],
		kalos: [ 649, 721 ],
		alola: [ 721, 809 ],
		galar: [ 809, 898 ]
	};
}

//logica de negocios, codigo arbitrario VA ACA
//el caso de uso llama a los puertos de salida, no al gateway, los puertos son puntos de conexion entre dominio e infraestructu
