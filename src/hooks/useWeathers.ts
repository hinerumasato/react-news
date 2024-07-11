import {CityOption} from "@/interfaces/CityOption.ts";
import axios from "axios";
export const useWeathers = async (selectedCity: CityOption | null)=> {
    if (selectedCity) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value},VN&appid=08f1a796d3b1d18369fb4fc769f3d61d&units=metric&lang=vi`);

        const data = response.data;

        const temperature = data.main["temp"];// nhiet do oC
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}.png`;                 // link anh icon thoi tiet
        const description = data.weather[0]["description"];// mo ta thoi tiet
        const feels_like = data.main["feels_like"];// nhiet do cam nhan oC
        const humidity = data.main["humidity"];// do am %
        const temp_min = data.main["temp_min"];// nhiet do thap nhat oC
        const temp_max = data.main["temp_max"];// nhiet do cao nhat oC
        const pressure = data.main["pressure"];// ap suat hPa
        const wind_speed = data.wind["speed"];// toc do gio m/s
        const wind_gust = data.wind["gust"];// toc do gio giat m/s
        const visibility = data.visibility;// tam nhin m
        const clouds = data.clouds["all"]; // may %

        return {
            temperature, weatherIcon, description, feels_like, humidity,
            temp_min, temp_max, pressure, wind_speed, wind_gust, visibility, clouds
        };
    }
};