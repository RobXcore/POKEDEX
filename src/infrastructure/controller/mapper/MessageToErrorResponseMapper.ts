import { ErrorResponse } from "../model/IErrorResponse";

export const MessageToErrorResponseMapper = (message: string) => {
  const errorMessages: ErrorResponse = {
    message: message,
  };
  return errorMessages;
};
