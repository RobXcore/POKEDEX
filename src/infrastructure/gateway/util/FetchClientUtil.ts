import { ApiErrorException } from "../../exception/ApiErrorException";
import { NotFoundException } from "../../exception/NotFoundException";

const ERROR_MESSAGE_GET_FROM_API = "La respuesta de la API fue un status no controlado";
const ERROR_MESSAGE_NOT_FOUND = "El siguiente recurso no fue encontrado: ";
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND_ERROR = 404;

const get = async (url: string) => {
  const responseApi = await fetch(url);
  if (responseApi.status === 200) {
    return responseApi.json();
  } else if (responseApi.status === 404) {
    throw new ApiErrorException(ERROR_MESSAGE_NOT_FOUND + `${responseApi.url}`, NOT_FOUND_ERROR);
  } else {
    throw new NotFoundException(
      ERROR_MESSAGE_GET_FROM_API + `${responseApi.url} ${responseApi.status} ${responseApi.statusText}`,
      INTERNAL_SERVER_ERROR
    );
  }
};

const post = () => {};

export default { get, post };
