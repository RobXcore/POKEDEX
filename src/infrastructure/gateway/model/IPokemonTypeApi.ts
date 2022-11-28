import { NameUrl } from "../../../domain/model/IPokemon";

export interface TypeApi {
  id: number;
  name: string;
  pokemon: [pokemon: NameUrl];
}
