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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPokemonByTypeUseCase = void 0;
class GetPokemonByTypeUseCase {
    constructor(IGetPokemonTypeGateway, IGetPokemonByUrlGateway) {
        this.IGetPokemonTypeGateway = IGetPokemonTypeGateway;
        this.IGetPokemonByUrlGateway = IGetPokemonByUrlGateway;
    }
    execute(typeNameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonType = yield this.IGetPokemonTypeGateway.execute(typeNameOrId);
            const typePokemon = yield Promise.all(pokemonType.pokemonList.map((pokemon) => __awaiter(this, void 0, void 0, function* () { return yield this.IGetPokemonByUrlGateway.execute(pokemon.url); })));
            return typePokemon;
        });
    }
}
exports.GetPokemonByTypeUseCase = GetPokemonByTypeUseCase;
//# sourceMappingURL=GetPokemonByTypeUseCase.js.map