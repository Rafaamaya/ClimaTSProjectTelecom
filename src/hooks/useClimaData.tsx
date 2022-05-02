import { useEffect, useState } from "react";
import openweathermap from "../api/openweathermap";
import { OpenWeatherMap } from "../interfaces/openweatherinterface";


export const useClimaData = (Ciudad: string, Pais: number | string) => {
    const [climaData, setClimaData] = useState<OpenWeatherMap>();
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const resp = await openweathermap.get<OpenWeatherMap>(`/weather?q=${Ciudad},${Pais}`);
        setClimaData(resp.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])


    return {
        climaData,
        isLoading
    }
}
