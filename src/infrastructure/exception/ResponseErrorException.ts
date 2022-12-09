import { Exception } from "./Exception";

export class ResponseErrorException extends Exception {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
