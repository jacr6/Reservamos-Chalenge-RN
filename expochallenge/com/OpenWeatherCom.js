
import fetchPostService from "./fetchhandler"
import {REACT_APP_OPENWEATHER_KEY, REACT_APP_API_OPENWEATHER} from '@env'

export async function OpenWeatherCom(body) {

  let data = { ...body, appid: `${REACT_APP_OPENWEATHER_KEY}` }
  let url = `${REACT_APP_API_OPENWEATHER}`
  return await fetchPostService("get", url, data)
    .then(result => result)
    .catch(error => error)
}
