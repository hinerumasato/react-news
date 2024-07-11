// src/hooks/useWeather.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import {CityOption} from "@/interfaces/CityOption.ts";

const useWeather = (selectedCity: CityOption | null) => {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [weatherIcon, setWeatherIcon] = useState<string | null>(null);

    useEffect(() => {
        if (selectedCity) {
            const fetchWeather = async () => {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value},VN&appid=08f1a796d3b1d18369fb4fc769f3d61d&units=metric`);
                    setTemperature(response.data.main.temp);
                    setWeatherIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
                } catch (error) {
                    console.error('Error fetching the weather data:', error);
                }
            };

            fetchWeather();
        }
    }, [selectedCity]);

    return { temperature, weatherIcon };
};

export default useWeather;
