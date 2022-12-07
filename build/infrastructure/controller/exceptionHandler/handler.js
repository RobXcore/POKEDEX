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
exports.Handler = void 0;
const MessageToErrorResponseMapper_1 = require("../mapper/MessageToErrorResponseMapper");
function Handler(fun) {
    return (req, res, _next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield fun(req, res);
        }
        catch (error) {
            const ex = error;
            res.status(ex.statusCode);
            res.send((0, MessageToErrorResponseMapper_1.MessageToErrorResponseMapper)(ex.message));
        }
    });
}
exports.Handler = Handler;
//# sourceMappingURL=handler.js.map