import { Middleware } from 'redux';

export const themeMiddleware: Middleware = store => next => action => {
    if (action.type === 'CHANGE_THEME') {
        localStorage.setItem('theme', action.payload);
    }

    console.log('Middleware', action);
    return next(action);
}