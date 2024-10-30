// React
import { ReactNode, useEffect, useRef } from 'react';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';

interface FeaturesStepProps {
    order1?: string;
    order2?: string;
    title: string;
    description: string;
    component: ReactNode;
}

export default function FeaturesStep({ order1, order2, title, description, component }: FeaturesStepProps) {

    const titleRef = useRef(null);
    const captionRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        // Reference delle animazioni
        const title = titleRef.current || "";
        const caption = captionRef.current || "";
        const image = imgRef.current || "";
        // Avvio delle animazioni
        fadeInElement(title, 0.5, 0.5);
        fadeInElement(caption, 0.5, 1.0);
        fadeInElement(image, 0.5, 0.0);
    }, []);

    return (
        <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-y-10 gap-x-5">
            {/* Features titolo e descrizione */}
            <div className={`w-full md:w-2/3 flex flex-col items-center justify-center gap-y-5 text-center ${order1}`}>
                <h1 className="md:max-w-[70%] text-4xl text-balance font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray " ref={titleRef}>
                    {title}
                </h1>
                <p className="md:max-w-[70%] text-lg text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray " ref={captionRef}>
                    {description}
                </p>
            </div>
            {/* Features componente */}
            <div className={`md:w-1/2 flex items-center justify-center ${order2}`} ref={imgRef}>
                {component}
            </div>
        </div>
    );
}
