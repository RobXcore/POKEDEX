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
exports.GetPokemonListGateway = void 0;
const PokemonListApiToPokemonListMapper_1 = require("./mapper/PokemonListApiToPokemonListMapper");
const FetchClientUtil_1 = __importDefault(require("./util/FetchClientUtil"));
const URL_GET_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=";
class GetPokemonListGateway {
    execute(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseApi = yield FetchClientUtil_1.default.get(URL_GET_POKEMON_LIST + offset);
            const pokemonListApi = responseApi;
            return (0, PokemonListApiToPokemonListMapper_1.PokemonListApiToPokemonListMapper)(pokemonListApi);
        });
    }
}
exports.GetPokemonListGateway = GetPokemonListGateway;
//# sourceMappingURL=getPokemonListGateway.js.map