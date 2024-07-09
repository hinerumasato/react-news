import React, {useEffect, useState} from 'react';
import {CityOption} from "@/interfaces/CityOption.ts";
import {useWeathers} from "@/hooks/useWeathers.ts";
import "@/assets/css/Weather.scss";
import {Popover, OverlayTrigger} from 'react-bootstrap';
import {IWeatherItem} from "@/interfaces/IWeatherItem.ts";


const cities: CityOption[] = [
    {value: 'Ho Chi Minh City', label: 'Hồ Chí Minh'},
    {value: 'Ha Noi', label: 'Hà Nội'},
    {value: 'Đà Nẵng', label: 'Đà Nẵng'},
    {value: 'Hải Phòng', label: 'Hải Phòng'},
    {value: 'Cần Thơ', label: 'Cần Thơ'}
];
const getCurrentDate = () => {
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    const year = now.getFullYear();

    return `${day}, ${date}/${month}/${year}`;
};

export const Weather: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(cities[0]);
    const [weatherItem, setWeatherItem] = useState<IWeatherItem>()

    useEffect(() => {
        const fetchWeatherData = async () => {
            const weatherData = await useWeathers(selectedCity);
            setWeatherItem(weatherData)
        }
        fetchWeatherData();

    }, [selectedCity]);

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const city = cities.find(c => c.value === selectedValue) || null;
        setSelectedCity(city);
    };

    return (
        <div className="weather-container">
            <table className="weather-table">
                <tbody>
                <tr>
                    <td className="date-time">{getCurrentDate()}</td>
                    {weatherItem?.temperature != null && weatherItem?.weatherIcon && (
                        <td rowSpan={2}>
                            <OverlayTrigger placement="right" overlay={
                                <Popover>
                                    <Popover.Header as="h4">
                                        {weatherItem.description}
                                    </Popover.Header>
                                    <Popover.Body>
                                        <dl>
                                            <dt>Nhiệt độ hiện tại</dt>
                                            <dd>{weatherItem.temperature} &deg;C</dd>

                                            <dt>Cảm giác như</dt>
                                            <dd>{weatherItem.feels_like} &deg;C</dd>

                                            <dt>Độ ẩm</dt>
                                            <dd>{weatherItem.humidity}%</dd>

                                            <dt>Nhiệt độ cao nhất</dt>
                                            <dd>{weatherItem.temp_max} &deg;C</dd>

                                            <dt>Nhiệt độ thấp nhất</dt>
                                            <dd>{weatherItem.temp_min} &deg;C</dd>

                                            <dt>Áp suất không khí</dt>
                                            <dd>{weatherItem.pressure} hPA</dd>

                                            <dt>Tốc độ gió</dt>
                                            <dd>{weatherItem.wind_speed} m/s</dd>

                                            <dt>Tầm nhìn xa</dt>
                                            <dd>{weatherItem.visibility / 1000} km</dd>

                                            <dt>Độ che phủ mây</dt>
                                            <dd>{weatherItem.clouds}%</dd>
                                        </dl>
                                    </Popover.Body>
                                </Popover>
                            }
                            >
                                <div className="weather-info ms-4">
                                    <div className="temperature">{Math.round(weatherItem.temperature)}°C</div>
                                    <img src={weatherItem.weatherIcon} alt="weather icon" className="weather-icon"/>
                                </div>
                            </OverlayTrigger>
                        </td>
                    )}
                </tr>
                <tr>
                    <td>
                        <select className="city-select" onChange={handleCityChange} defaultValue="">
                            {cities.map(city => (
                                <option key={city.value} value={city.value}>{city.label}</option>
                            ))}
                        </select>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
    );
};

