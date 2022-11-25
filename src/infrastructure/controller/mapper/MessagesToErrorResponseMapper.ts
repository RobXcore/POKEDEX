import { ErrorResponse } from "../model/IErrorResponse";

export const MessagesToErrorResponseMapper = (messages: string[]) => {
  const errorMessages: ErrorResponse = {
    messages: messages,
  };
  return errorMessages;
};
