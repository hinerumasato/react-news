import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
    const [location, setLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(!navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            
            (error) => {
                setError(error.message);
            }
        )
    }, [])

    return { location, error };
}