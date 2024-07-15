import { configureStore } from '@reduxjs/toolkit';
import { themeMiddleware } from './middlewares';

const initialState = {
    theme: 'light',
}

const themeReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: themeReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themeMiddleware),
});


