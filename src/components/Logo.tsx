// React
import { useEffect, useState } from "react";
// React-router
import { Link } from "react-router-dom";
// Utilities
import { scrollToElement } from '../utilities/useAnimations.tsx';
// Components
import { IconaLogo } from "./SvgComponents.tsx";

interface LogoProps {
    width: string;
    height: string;
}

export default function Logo({ width, height }: LogoProps) {

    const [isVisible, setVisible] = useState(window.innerWidth > 728);

    const handleResize = () => {
        setVisible(window.innerWidth > 728);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="md:w-1/4 p-y-10">
            <Link to="/" onClick={() => scrollToElement("#Home")} aria-label="link logo home" className="flex items-center gap-x-3">
                <IconaLogo width={width} height={height} />
                {isVisible && <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>}
            </Link>
        </div>
    );
}
