import { Exception } from "./Exception";

export class ApiErrorException extends Exception {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
