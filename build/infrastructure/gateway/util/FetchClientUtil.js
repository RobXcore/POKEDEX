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
const ApiErrorException_1 = require("../../exception/ApiErrorException");
const NotFoundException_1 = require("../../exception/NotFoundException");
const UNCONTROLLED_STATUS_ERROR_MESSAGE = "La respuesta de la API fue un status no controlado.";
const NOT_FOUND_ERROR_MESSAGE = "El siguiente recurso no fue encontrado: ";
const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
const NOT_FOUND_STATUS_CODE = 404;
const get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const responseApi = yield fetch(url);
    if (responseApi.status === 200) {
        return responseApi.json();
    }
    else if (responseApi.status === 404) {
        throw new ApiErrorException_1.ApiErrorException(NOT_FOUND_ERROR_MESSAGE + `${responseApi.url}`, NOT_FOUND_STATUS_CODE);
    }
    else {
        throw new NotFoundException_1.NotFoundException(UNCONTROLLED_STATUS_ERROR_MESSAGE + `${responseApi.url} ${responseApi.status} ${responseApi.statusText}`, INTERNAL_SERVER_ERROR_STATUS_CODE);
    }
});
const post = () => { };
exports.default = { get, post };
//# sourceMappingURL=FetchClientUtil.js.map