import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeAction } from "@/redux/actions";

export const ThemeToggleButton = () => {
    const dispatch = useDispatch();
    const isLightTheme = useSelector((state) => state.theme === 'light');

    useEffect(() => {

        const localStoragetheme = localStorage.getItem('theme') || 'light';
        dispatch(changeThemeAction(localStoragetheme));

        applyTheme(localStoragetheme);
    }, [dispatch]);

    const toggleTheme = () => {
        const newTheme = isLightTheme ? 'dark' : 'light';
        dispatch(changeThemeAction(newTheme));

        applyTheme(newTheme);
    };

    const applyTheme = (theme: string) => {
        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    }

    return (
        <div>
            <Around
                style={{ width: '50px', height: '50px' }}
                duration={750}
                toggled={isLightTheme}
                toggle={toggleTheme}
                placeholder={undefined}
                color={isLightTheme ? '#f1c40f' : '#2c3e50'}
                reversed={false}
            />
        </div>
    );
}