import { validate } from "jsonschema";
import { ResponseErrorException } from "../../exception/ResponseErrorException";

const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
const INVALID_RESPONSE = "Error en la respuesta, no se cumple el schema de la respuesta";

export const responseValidator = (toValidate: object, schema: object) => {
  const validator = validate(toValidate, schema);

  if (!validator.valid) {
    throw new ResponseErrorException(INVALID_RESPONSE, INTERNAL_SERVER_ERROR_STATUS_CODE);
  } else {
    return toValidate;
  }
};
