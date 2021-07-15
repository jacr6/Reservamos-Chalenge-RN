import { useState, useEffect, useContext } from "react";
import { ReservamosCom } from '../com/ReservamosCom'

export const useReservamosPlaces = () => {

    const [ReservamosPlaces, setReservamosPlaces] = useState([]);
    const [error, setError] = useState(); 
    // debugger;
    console.log("ReservamosPlaces: ",ReservamosPlaces);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ReservamosCom(ReservamosPlaces,"/places");
               
                if (response.length) {
                   
                    setReservamosPlaces(response)
                }



            } catch (error) {
                setError(error)
            }
        }
        (ReservamosPlaces.length==0)&&fetchData()
    }, [ReservamosPlaces])

    return {
        ReservamosPlaces, setReservamosPlaces, error
    }
}

export default useReservamosPlaces
