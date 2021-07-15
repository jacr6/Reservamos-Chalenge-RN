import { useState, useEffect, useContext } from "react";
import { OpenWeatherCom } from "../com/OpenWeatherCom";

export const useOpenWeather = () => {

    const [OpenWeather, setOpenWeather] = useState([]);
    const [error, setError] = useState(); 
    // debugger;
    console.log("OpenWeather: ",OpenWeather);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await OpenWeatherCom(OpenWeather);
           
                if (response.current) {
                    setOpenWeather(response)
                }
                

            } catch (error) {
                setError(error)
            }
        }
        OpenWeather.lat&&OpenWeather.lon&&!OpenWeather.current&&fetchData()
    }, [OpenWeather])

    return {
        OpenWeather, setOpenWeather, error
    }
}

export default useOpenWeather
