import React, { useState } from 'react';
import {CityOption} from "@/interfaces/CityOption.ts";
import {useWeathers} from "@/components/partials/Header/useWeathers.ts";

const cities: CityOption[] = [
    { value: 'Ho Chi Minh', label: 'Ho Chi Minh' },
    { value: 'Hanoi', label: 'Hanoi' },
    { value: 'Da Nang', label: 'Da Nang' },
    { value: 'Hai Phong', label: 'Hai Phong' },
    { value: 'Can Tho', label: 'Can Tho' }
];

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
            <select onChange={handleCityChange} defaultValue="">
                <option value="" disabled>Select a city</option>
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
