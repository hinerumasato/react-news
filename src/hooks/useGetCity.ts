import { Application } from "@/constants";
import { useEffect, useState } from "react"

export const useGetCity = (latitude: number, longitude: number): string | null => {
    const [cityName, setCityName] = useState<string | null>(null);
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Application.WEATHER_API_KEY}&units=metric&lang=vi`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const city = data.name;
                setCityName(city);
            });
    }, [latitude, longitude]);
    return cityName;
}