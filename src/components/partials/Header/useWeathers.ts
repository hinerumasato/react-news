import {useEffect, useState} from "react";
import {CityOption} from "@/interfaces/CityOption.ts";
import axios from "axios";

export const useWeathers = (selectedCity: CityOption | null) => {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
    useEffect(() => {
        if (selectedCity) {
            const fetchWeather = async () => {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value},VN&appid=08f1a796d3b1d18369fb4fc769f3d61d&units=metric`);
                    setTemperature(response.data.main.temp);
                    setWeatherIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
                } catch (error) {
                    console.error('Fetch weather api faild', error);
                }
            };
            fetchWeather();
        }

    }, [selectedCity]);
    return {temperature, weatherIcon}
};