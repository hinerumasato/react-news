export const changeThemeAction = (theme: string) => {
    return {
        type: 'CHANGE_THEME',
        payload: theme,
    }
}