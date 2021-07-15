import { useState, useEffect, useContext } from "react";
import { OpenWeatherCom } from "../com/OpenWeatherCom";

export const useOpenWeather = () => {

    const [OpenWeather, setOpenWeather] = useState([]);
    const [error, setError] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await OpenWeatherCom(OpenWeather);
                const { data, state } = response;
                if (state) {
                    setOpenWeather(data)
                }


            } catch (error) {
                setError(error)
            }
        }
        OpenWeather.lat&&OpenWeather.long&&fetchData()
    }, [OpenWeather])

    return {
        OpenWeather, setOpenWeather, error
    }
}

export default useOpenWeather
