import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import "@/assets/css/FabButton.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeAction } from "@/redux/actions";

export const ThemeToggleButton = () => {
    const dispatch = useDispatch();

    const isLightTheme = useSelector((state) => state.theme === 'light');

    useEffect(() => {

        const localStoragetheme = localStorage.getItem('theme') || 'light';
        if (localStoragetheme !== (isLightTheme ? 'light' : 'dark')) {
            dispatch(changeThemeAction(localStoragetheme));
        }
    }, [dispatch, isLightTheme]);

    const toggleTheme = () => {
        dispatch(changeThemeAction(isLightTheme ? 'dark' : 'light'));

        if (isLightTheme) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    };

    return (
        <div className="fab-button">
            <Around
                duration={750}
                toggled={isLightTheme}
                toggle={toggleTheme}
                placeholder={undefined}
                color={isLightTheme ? '#f1c40f' : '#2c3e50'}
            />
        </div>
    );
}