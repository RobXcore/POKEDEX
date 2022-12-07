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
exports.GetPokemonByRegionUseCase = void 0;
class GetPokemonByRegionUseCase {
    constructor(getPokemonByRegionGateway, getAllPokemonByRegionGateway) {
        this.getPokemonByRegionGateway = getPokemonByRegionGateway;
        this.getAllPokemonByRegionGateway = getAllPokemonByRegionGateway;
    }
    execute(region) {
        return __awaiter(this, void 0, void 0, function* () {
            const regions = {
                kanto: [0, 151],
                johto: [151, 251],
                hoenn: [251, 386],
                sinnoh: [386, 493],
                unova: [493, 649],
                kalos: [649, 721],
                alola: [721, 809],
                galar: [809, 898]
            };
            const indexes = regions[region];
            const limit = indexes[1] - indexes[0];
            const offset = indexes[0];
            const pokemonListNameUrl = yield this.getPokemonByRegionGateway.execute(limit, offset);
            const urlArray = pokemonListNameUrl.results.map(({ url }) => url);
            return yield this.getAllPokemonByRegionGateway.execute(urlArray);
        });
    }
}
exports.GetPokemonByRegionUseCase = GetPokemonByRegionUseCase;
//# sourceMappingURL=getPokemonByRegionUseCase.js.map