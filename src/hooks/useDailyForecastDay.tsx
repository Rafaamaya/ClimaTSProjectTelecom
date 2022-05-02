import { useEffect, useState } from "react";
import openweathermap from "../api/openweathermap";
import { OpenWeatherMap } from "../interfaces/openweatherinterface";

import Geolocation from '@react-native-community/geolocation';
import { DailyForecastDay } from "../interfaces/dailyForecastDaysInterface";


export const useDailyForecastDay = () => {
  const [climaDailyForecastDayData, setClimaDailyForecastDayData] = useState<DailyForecastDay>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (lat: string, lon: string) => {
    const resp = await openweathermap.get<DailyForecastDay>(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly`);
    resp.data.daily.shift()
    resp.data.daily.pop()
    resp.data.daily.pop()
    setClimaDailyForecastDayData(resp.data);
    setIsLoading(false);
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      getData(info.coords.latitude.toString(), info.coords.longitude.toString())
    });
  }, [])

  return {
    climaDailyForecastDayData,
    isLoading
  }
}
