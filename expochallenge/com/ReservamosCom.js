
import fetchPostService from "./fetchhandler"
import {REACT_APP_RESERVAMOS} from '@env'

export async function ReservamosCom(body, path) {
  debugger;
  let data = { ...body }
  let url = `${REACT_APP_RESERVAMOS}` 

  return await fetchPostService("get", url + path, data)
    .then(result => result)
    .catch(error => error)
}
