import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "@/assets/css/GoToTopBtn.scss";


export const GoTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    useEffect(() => {
        const checkScrollTop = () => {
            if (!visible && window.pageYOffset > 500) {
                setVisible(true);
            } else if (visible && window.pageYOffset <= 500) {
                setVisible(false);
            }
        }
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, [visible]);
    return (
        <FaArrowAltCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ height: 40, display: visible ? 'flex' : "none" }} />
    )

}