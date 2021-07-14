import { useState, useEffect, useContext } from "react";
import { ReservamosCom } from '../com/ReservamosCom'

export const useReservamosPlaces = () => {

    const [ReservamosPlaces, setReservamosPlaces] = useState([]);
    const [error, setError] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ReservamosCom(ReservamosPlaces,"/places");
                const { data, state } = response;
                if (state) {
                    setReservamosPlaces(data)
                }


            } catch (error) {
                setError(error)
            }
        }
        ReservamosPlaces.length==0&&fetchData()
    }, [ReservamosPlaces])

    return {
        ReservamosPlaces, setReservamosPlaces, error
    }
}

export default useReservamosPlaces
