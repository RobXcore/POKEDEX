import { ApiErrorException } from "../../exception/ApiErrorException";
import { NotFoundException } from "../../exception/NotFoundException";

const UNCONTROLLED_STATUS_ERROR_MESSAGE = "La respuesta de la API fue un status no controlado.";
const NOT_FOUND_ERROR_MESSAGE = "El siguiente recurso no fue encontrado: ";
const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
const NOT_FOUND_STATUS_CODE = 404;

const get = async (url: string) => {
  const responseApi = await fetch(url);
  if (responseApi.status === 200) {
    return responseApi.json();
  } else if (responseApi.status === 404) {
    throw new ApiErrorException(NOT_FOUND_ERROR_MESSAGE + `${responseApi.url}`, NOT_FOUND_STATUS_CODE);
  } else {
    throw new NotFoundException(
      UNCONTROLLED_STATUS_ERROR_MESSAGE + `${responseApi.url} ${responseApi.status} ${responseApi.statusText}`,
      INTERNAL_SERVER_ERROR_STATUS_CODE
    );
  }
};

const post = () => {};

export default { get, post };