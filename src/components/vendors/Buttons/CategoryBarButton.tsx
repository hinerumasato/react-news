import React from "react";

export const CategoryBarButton = (
    { children, onClick = () => { }, active = false }: 
    { children?: React.ReactNode, onClick?: React.MouseEventHandler, active?: boolean }
) => {
    return (
        <button className={`button-category px-3 py-2 ${active ? 'active': ''}`} onClick={onClick}>
            {children}
        </button>
    )
}
