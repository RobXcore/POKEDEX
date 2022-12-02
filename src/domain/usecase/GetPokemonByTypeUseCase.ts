import { TypeApi } from "../../infrastructure/gateway/model/IPokemonTypeApi";
import { Pokemon } from "../model/IPokemon";
import { IGetPokemonByType } from "../port/input/IGetPokemonByType";
import { IGetPokemonTypeGateway as IGetPokemonTypeGateway } from "../port/output/IGetPokemonTypeGateway";
import { IGetPokemonByUrlGateway } from "../port/output/IGetPokemonByUrlGateway";
import { RequestParamException } from "../../infrastructure/exception/RequestParamException";

const NUMBER_OF_POKEMON_TYPES = 20;
const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_TYPE_ID_IN_PATH_ERROR_MESSAGE =
  "Si elige buscar por id del tipo, éste número entero debe encontrarse entre 1 y 20 inclusive.";

export class GetPokemonByTypeUseCase implements IGetPokemonByType {
  constructor(
    private readonly IGetPokemonTypeGateway: IGetPokemonTypeGateway,
    private readonly IGetPokemonByUrlGateway: IGetPokemonByUrlGateway
  ) {}

  async execute(typeNameOrId: string): Promise<Pokemon[]> {
    //TODO: llevar lógica de verificar parámetros al controller
    if (
      //Verifica si el valor recibido son letras o un número entre 0 y 20
      isNaN(+typeNameOrId) ||
      +typeNameOrId >= 1 ||
      +typeNameOrId <= NUMBER_OF_POKEMON_TYPES
    ) {
      const pokemonType: TypeApi = await this.IGetPokemonTypeGateway.execute(
        typeNameOrId
      );

      const typePokemon: Pokemon[] = await Promise.all(
        pokemonType.pokemonList.map(
          async (pokemonObject) => await this.IGetPokemonByUrlGateway.execute(pokemonObject.pokemon.url)
        )
      );
      return typePokemon;
    } else {
      throw new RequestParamException(
        INVALID_TYPE_ID_IN_PATH_ERROR_MESSAGE,
        BAD_REQUEST_STATUS_CODE
      );
    }
  }
}