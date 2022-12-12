import { NextFunction, Request, Response } from "express";
import { Exception } from "../../exception/Exception";
import { MessageToErrorResponseMapper } from "../mapper/MessageToErrorResponseMapper";

export function Handler(fun: Function): any {
  return async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      await fun(req, res);
    } catch (error) {
      const ex = error as Exception;
      res.status(ex.statusCode | 500);
      res.send(MessageToErrorResponseMapper(ex.message));
    }
  };
}
