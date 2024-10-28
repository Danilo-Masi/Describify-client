// React
import { useEffect, useState, useCallback } from "react";
// React-router
import { Link } from "react-router-dom";
// Utilities
import { scrollToElement } from '../utilities/useAnimations.tsx';
// Assets
import logo from '../assets/images/logo.svg';

export default function Logo() {

    const [isVisible, setVisible] = useState(false);

    const handleResize = useCallback((e: any) => {
        setVisible(e.matches);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 728px)");
        setVisible(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, [handleResize]);

    return (
        <div className="md:w-1/4 py-10">
            <Link to="/" onClick={() => scrollToElement("#Home")} aria-label="Home page di Describify" className="flex items-center gap-x-3">
                <div className='flex items-center gap-x-2'>
                    <img src={logo} alt="Describify Logo" className="w-14 h-12 md:w-10 md:h-10" />
                    {isVisible && (
                        <h2 className='text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>
                            Describify
                        </h2>
                    )}
                </div>
            </Link>
        </div>
    );
}