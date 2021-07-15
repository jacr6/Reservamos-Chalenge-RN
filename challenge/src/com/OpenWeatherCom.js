
import { fetchPostService } from "./fetchhandler"

export async function OpenWeatherCom(body) {

  data = { ...body, appid: process.env.REACT_APP_OPENWEATHER_KEY }

  return await fetchPostService("get", process.env.REACT_APP_API_OPENWEATHER, data)
    .then(result => result)
    .catch(error => error)
}
