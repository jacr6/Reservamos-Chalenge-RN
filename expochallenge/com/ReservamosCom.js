
import { fetchPostService } from "./fetchhandler"

export async function ReservamosCom(body, path) {

  data = { ...body }

  return await fetchPostService("get", process.env.REACT_APP_RESERVAMOS+path, data)
    .then(result => result)
    .catch(error => error)
}
