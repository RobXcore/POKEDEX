import { Exception } from "./Exception";

export class RequestParamException extends Exception {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
