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
exports.PokemonController = void 0;
const RequestParamException_1 = require("../exception/RequestParamException");
const allPokemonToAllPokemonResponseMapper_1 = __importDefault(require("./mapper/allPokemonToAllPokemonResponseMapper"));
const PokemonListToPokemonByTypeResponseMapper_1 = __importDefault(require("./mapper/PokemonListToPokemonByTypeResponseMapper"));
const REGIONS = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar"];
const BAD_REQUEST_STATUS_CODE = 400;
const INVALID_REGION_ERROR_MESSAGE = "La región ingresada no existe en el universo Pokemon";
const INVALID_OFFSET_ERROR_MESSAGE = "El offset enviado no es numérico";
const INVALID_ID_ERROR_MESSAGE = "El id ingresado no es válido";
const MISSING_TYPE_IN_PATH_ERROR_MESSAGE = "Debe indicarse en el path un nombre de tipo en inglés o algún número entero como id entre 1 y 18 inclusive.";
class PokemonController {
    constructor(IGetAllPokemon, IGetPokemonById, IGetPokemonByType, IGetPokemonByRegion) {
        this.IGetAllPokemon = IGetAllPokemon;
        this.IGetPokemonById = IGetPokemonById;
        this.IGetPokemonByType = IGetPokemonByType;
        this.IGetPokemonByRegion = IGetPokemonByRegion;
        this.getAllPokemon = this.getAllPokemon.bind(this);
        this.getPokemonById = this.getPokemonById.bind(this);
        this.getPokemonByType = this.getPokemonByType.bind(this);
        this.getPokemonByRegion = this.getPokemonByRegion.bind(this);
    }
    getAllPokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestOffset;
            !req.query.offset ? (requestOffset = 0) : (requestOffset = +req.query.offset);
            if (isNaN(requestOffset)) {
                throw new RequestParamException_1.RequestParamException(INVALID_OFFSET_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
            }
            else {
                res.send((0, allPokemonToAllPokemonResponseMapper_1.default)(yield this.IGetAllPokemon.execute(requestOffset)));
            }
        });
    }
    getPokemonById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                throw new RequestParamException_1.RequestParamException(INVALID_ID_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
            }
            else {
                res.send(yield this.IGetPokemonById.execute(id));
            }
        });
    }
    getPokemonByType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let typeNameOrId;
            if (!req.params.type || req.params.type.trim() === "") {
                throw new RequestParamException_1.RequestParamException(MISSING_TYPE_IN_PATH_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
            }
            else {
                typeNameOrId = req.params.type.trim();
                res.send((0, PokemonListToPokemonByTypeResponseMapper_1.default)(yield this.IGetPokemonByType.execute(typeNameOrId)));
            }
        });
    }
    getPokemonByRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { region } = req.params;
            if (!REGIONS.some((regionArr) => region.includes(regionArr))) {
                throw new RequestParamException_1.RequestParamException(INVALID_REGION_ERROR_MESSAGE, BAD_REQUEST_STATUS_CODE);
            }
            else {
                const pokeRes = yield this.IGetPokemonByRegion.execute(region);
                res.statusCode = 200;
                res.json(pokeRes);
            }
        });
    }
}
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemonController.js.map