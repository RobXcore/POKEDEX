export class Exception {
  message: string;
  statusCode: any;
  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
