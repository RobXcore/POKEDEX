"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPokemonTypeGateway = void 0;
const FetchClientUtil_1 = __importDefault(require("./util/FetchClientUtil"));
const PokemonTypeApiToPokemonTypeMapper_1 = require("./mapper/PokemonTypeApiToPokemonTypeMapper");
class GetPokemonTypeGateway {
    constructor() {
        this.GET_POKEMON_TYPE_URL = "https://pokeapi.co/api/v2/type/";
    }
    execute(typeNameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiResponse = yield FetchClientUtil_1.default.get(this.GET_POKEMON_TYPE_URL + typeNameOrId);
            const pokemonTypeApi = apiResponse;
            return (0, PokemonTypeApiToPokemonTypeMapper_1.PokemonTypeApiToPokemonType)(pokemonTypeApi);
        });
    }
}
exports.GetPokemonTypeGateway = GetPokemonTypeGateway;
//# sourceMappingURL=GetPokemonTypeGateway.js.map