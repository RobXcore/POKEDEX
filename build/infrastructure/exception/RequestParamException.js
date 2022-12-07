"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestParamException = void 0;
const Exception_1 = require("./Exception");
class RequestParamException extends Exception_1.Exception {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
exports.RequestParamException = RequestParamException;
//# sourceMappingURL=RequestParamException.js.map