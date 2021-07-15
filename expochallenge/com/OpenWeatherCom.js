
import fetchPostService from "./fetchhandler"
import { REACT_APP_OPENWEATHER_KEY, REACT_APP_OPENWEATHER } from '@env'

export async function OpenWeatherCom(body) {
  // debugger;
  let data = { ...body, appid: `${REACT_APP_OPENWEATHER_KEY}` }
  let url = `${REACT_APP_OPENWEATHER}`
  return await fetchPostService("get", url, data, false)
    .then(result => {

      console.log("AQUI:", result)
      return result
    })
    .catch(error => error)
}
