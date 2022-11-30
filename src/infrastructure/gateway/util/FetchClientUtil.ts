import { ApiErrorException } from "../../exception/ApiErrorException";

const ERROR_MESSAGE_GET = "La respuesta de la API fue distinta de 200: ";
const INTERNAL_SERVER_ERROR = 500;

const get = async (url: string) => {
  const responseApi = await fetch(url);
  if (responseApi.status === 200) {
    return responseApi.json();
  } else {
    throw new ApiErrorException(
      ERROR_MESSAGE_GET + `${responseApi.url} ${responseApi.status} ${responseApi.statusText}`,
      INTERNAL_SERVER_ERROR
    );
  }
};

const post = () => {};

export default { get, post };
