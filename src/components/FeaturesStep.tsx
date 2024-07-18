import { ReactNode, useEffect, useRef, useState } from 'react';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
// Components
import { Sparkling, ArrowDown, ArrowRight } from './SvgComponents';

interface DataFeaturesProps {
    title: string;
    caption: string;
}

interface FeaturesStepProps {
    justifyPosition: string;
    order1?: string;
    order2?: string;
    data: DataFeaturesProps;
    component: ReactNode;
    arrow?: boolean;
    sparkling?: boolean;
}

export default function FeaturesStep({ justifyPosition, order1, order2, data, component, arrow, sparkling }: FeaturesStepProps) {

    const titleRef = useRef(null);
    const captionRef = useRef(null);
    const imgRef = useRef(null);

    const [arrowComponent, setArrowComponent] = useState<any>();

    useEffect(() => {
        // Reference delle animazioni
        const title = titleRef.current || "";
        const caption = captionRef.current || "";
        const image = imgRef.current || "";
        // Avvio delle animazioni
        fadeInElement(title, 0.5, 0.0);
        fadeInElement(caption, 0.5, 0.5);
        fadeInElement(image, 0.5, 1.0);
    }, []);

    // Funzione per modificare l'SVG corrente
    const handleResize = () => {
        const windowSize = window.innerWidth;
        setArrowComponent(windowSize > 728 ? <ArrowRight width="150" height="150" /> : <ArrowDown width="100" height="100" />);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-y-10 gap-x-5">
            {/* Features text */}
            <div className={`w-full md:w-2/3 flex flex-col items-center gap-y-5 text-center ${justifyPosition} ${order1}`}>
                {sparkling &&
                    <div className='flex'>
                        <Sparkling width="100" height="100" />
                        <Sparkling width="150" height="150" />
                        <Sparkling width="100" height="100" />
                    </div>
                }
                <h1 className="md:max-w-[70%] text-4xl text-balance font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray " ref={titleRef}>{data.title}</h1>
                <p className="md:max-w-[70%] text-lg text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray " ref={captionRef}>{data.caption}</p>
                {arrow && arrowComponent}
            </div>
            {/* Components */}
            <div className={`md:w-1/2 flex items-center justify-center ${order2}`} ref={imgRef}>
                {component}
            </div>
        </div>
    );
}
