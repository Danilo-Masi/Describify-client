import { useEffect, useRef } from 'react';
//Utilities
import { handleFade } from '../utilities/animations';

interface FeaturesStepProps {
    order1?: string;
    order2?: string;
    data: any;
}

export default function FeaturesStep({ order1, order2, data }: FeaturesStepProps) {

    const titleRef = useRef(null);
    const captionRef = useRef(null);
    const imgRef = useRef(null);


    useEffect(() => {
        //Reference
        const title = titleRef.current || "";
        const caption = captionRef.current || "";
        const image = imgRef.current || "";
        //Avvio delle animazioni
        handleFade(title, 0.5, 0.0);
        handleFade(caption, 0.5, 0.5);
        handleFade(image, 1.0, 1.0);
    }, []);


    return (
        <div className="w-full flex flex-col md:flex-row gap-y-10 gap-x-5">
            {/* Features text */}
            <div className={`w-full md:w-1/2 flex flex-col items-center justify-center gap-y-5 text-center  ${order1} `}>
                <h1 className="text-4xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance font-semibold" ref={titleRef}>{data.title}</h1>
                <p className="text-lg text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance font-light" ref={captionRef}>{data.caption}</p>
            </div>
            {/* Features img */}
            <div className={`w-full md:w-1/2 h-[60svh] flex items-center justify-center bg-custom-elevation2 dark:bg-dark-elevation2 rounded-xl ${order2}`} ref={imgRef}>

            </div>
        </div>
    )
}
