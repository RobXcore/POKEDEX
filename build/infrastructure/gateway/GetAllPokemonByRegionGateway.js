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
exports.GetAllPokemonByRegionGateway = void 0;
const pokemonApiToPokemonMapper_1 = __importDefault(require("./mapper/pokemonApiToPokemonMapper"));
const FetchClientUtil_1 = __importDefault(require("./util/FetchClientUtil"));
class GetAllPokemonByRegionGateway {
    constructor() { }
    execute(urlList) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlArray = yield Promise.all(urlList.map((url) => FetchClientUtil_1.default.get(url)));
            const individualMappedPokemon = urlArray.map((url) => (0, pokemonApiToPokemonMapper_1.default)(url));
            return individualMappedPokemon;
        });
    }
}
exports.GetAllPokemonByRegionGateway = GetAllPokemonByRegionGateway;
//# sourceMappingURL=GetAllPokemonByRegionGateway.js.map