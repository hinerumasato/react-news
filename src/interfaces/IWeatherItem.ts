export interface IWeatherItem{
    temperature: number;
    weatherIcon: string
    description: string;
    feels_like: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    wind_speed: number;
    wind_gust: number;
    visibility: number;
    clouds: number;
}