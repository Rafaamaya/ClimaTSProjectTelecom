import { useEffect, useState } from "react";
import { citiesArray } from "../api/citiesArray";
import openweathermap from "../api/openweathermap";
import { OpenWeatherMap } from "../interfaces/openweatherinterface";


export const useArrayClimaData = () => {
    const array = citiesArray;
    const ArrayOpenWeatherMap: OpenWeatherMap[] = [];
    const [arrayClimaData, setArrayClimaData] = useState<OpenWeatherMap[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        for (let index = 0; index < array.length; index++) {
            const resp = await openweathermap.get<OpenWeatherMap>(`/weather?id=${citiesArray[index]}`);
            ArrayOpenWeatherMap.push(resp.data);
        }
        setArrayClimaData(ArrayOpenWeatherMap);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])


    return {
        arrayClimaData,
        isLoading
    }
}
