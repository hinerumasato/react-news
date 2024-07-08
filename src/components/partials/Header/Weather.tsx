// src/components/Weather.tsx
import React, { useState } from 'react';
import {CityOption} from "@/interfaces/CityOption.ts";
import Select from 'react-select';
import {useWeathers} from "@/components/partials/Header/useWeathers.ts";

const cities: CityOption[] = [
    { value: 'Ho Chi Minh', label: 'Ho Chi Minh' },
    { value: 'Hanoi', label: 'Hanoi' },
    { value: 'Da Nang', label: 'Da Nang' },
    { value: 'Hai Phong', label: 'Hai Phong' },
    { value: 'Can Tho', label: 'Can Tho' }
];

// const Weather: React.FC = () => {
//     const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
//     const { temperature, weatherIcon } = useWeathers(selectedCity);
//
//     return (
//         <div>
//             <Select
//                 options={cities}
//                 onChange={setSelectedCity}
//                 placeholder="Select a city"
//             />
//             {temperature !== null && weatherIcon && (
//                 <div>
//                     <h2>Temperature in {selectedCity?.label}: {temperature}°C</h2>
//                     <img src={weatherIcon} alt="weather icon" />
//                 </div>
//             )}
//         </div>
//     );
// };

export default Weather;
