import React, { useState } from 'react';
import {CityOption} from "@/interfaces/CityOption.ts";
import {useWeathers} from "@/components/partials/Header/useWeathers.ts";

const cities: CityOption[] = [
    { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
    { value: 'Hà Nội', label: 'Hà Nội' },
    { value: 'Đà Nẵng', label: 'Đà Nẵng' },
    { value: 'Hải Phòng', label: 'Hải Phòng' },
    { value: 'Cần Thơ', label: 'Cần Thơ' }
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

const Weather: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
    const { temperature, weatherIcon } = useWeathers(selectedCity);

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const city = cities.find(c => c.value === selectedValue) || null;
        setSelectedCity(city);
    };

    return (
        <div>
            <div>{getCurrentDate()}</div>
            <select className="border-0 bg-white fs-4" onChange={handleCityChange} defaultValue="">
                {cities.map(city => (
                    <option>{city.label}</option>
                ))}
            </select>
            {temperature !== null && weatherIcon && (
                <div>
                    <h2>{temperature}°C</h2>
                    <img src={weatherIcon} alt="weather icon" />
                </div>
            )}
        </div>
    );
};

export default Weather;
