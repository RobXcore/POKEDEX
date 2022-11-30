import { TypeApi } from "../../infrastructure/gateway/model/IPokemonTypeApi";
import { Pokemon, NameUrl } from "../model/IPokemon";
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
    //Verifica si el valor recibido son letras o un número entre 0 y 20
    if (
      isNaN(+typeNameOrId) ||
      +typeNameOrId >= 1 ||
      +typeNameOrId <= NUMBER_OF_POKEMON_TYPES
    ) {
      const pokemonType: TypeApi = await this.IGetPokemonTypeGateway.execute(
        typeNameOrId
      );
      const typePokemon: Pokemon[] = await Promise.all(
        pokemonType.pokemon.map(
          async (pokemon: NameUrl) =>
            await this.IGetPokemonByUrlGateway.execute(pokemon.url)
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
