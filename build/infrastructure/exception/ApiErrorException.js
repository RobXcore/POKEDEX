"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorException = void 0;
const Exception_1 = require("./Exception");
class ApiErrorException extends Exception_1.Exception {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
exports.ApiErrorException = ApiErrorException;
//# sourceMappingURL=ApiErrorException.js.map