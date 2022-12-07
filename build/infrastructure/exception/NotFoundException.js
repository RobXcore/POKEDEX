"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const Exception_1 = require("./Exception");
class NotFoundException extends Exception_1.Exception {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=NotFoundException.js.map