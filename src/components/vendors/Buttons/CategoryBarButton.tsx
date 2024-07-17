import React, {useEffect, useRef} from "react";

export const CategoryBarButton = React.memo((
    { children, onClick = () => { }, active = false }:
        { children?: React.ReactNode, onClick?: React.MouseEventHandler, active?: boolean }
) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (active && buttonRef.current) {
            buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }, [active]);

    return (
        <button ref={buttonRef} className={`button-category px-3 py-2 ${active ? 'active': ''}`} onClick={onClick}>
            {children}
        </button>
    )
});