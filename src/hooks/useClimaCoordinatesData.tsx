import { useEffect, useState } from "react";
import openweathermap from "../api/openweathermap";
import { OpenWeatherMap } from "../interfaces/openweatherinterface";

import Geolocation from '@react-native-community/geolocation';


export const useClimaCoordinatesData = () => {
    const [climaData, setClimaData] = useState<OpenWeatherMap>();
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (lat: string, lon: string) => {
        const resp = await openweathermap.get<OpenWeatherMap>(`/weather?lat=${lat}&lon=${lon}`);
        setClimaData(resp.data);
        setIsLoading(false);
    }

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            getData(info.coords.latitude.toString(), info.coords.longitude.toString())
        });
    }, [])

    return {
        climaData,
        isLoading
    }
}
