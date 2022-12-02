import { Exception } from "./Exception";

export class NotFoundException extends Exception {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
