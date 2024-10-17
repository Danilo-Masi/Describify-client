// React
import { useEffect, useRef } from "react";
// Flowbite-react
import { Badge } from "flowbite-react";
// Utilities
import { fadeInElement } from '../utilities/useAnimations';

interface IntestazioneProps {
    badgeValue?: string;
    titleValue: string;
    descriptionValue: string;
    titleStyle: string;
    descriptionStyle: string;
}

export default function Intestazione({ badgeValue, titleValue, descriptionValue, titleStyle, descriptionStyle }: IntestazioneProps) {

    const titleRef = useRef(null);
    const captionRef = useRef(null);

    useEffect(() => {
        // Reference delle animazioni
        const title = titleRef.current || "";
        const caption = captionRef.current || "";
        // Avvio delle animazioni
        fadeInElement(title, 0.5, 0.0);
        fadeInElement(caption, 0.5, 0.5);
    }, [window.onload]);

    return (
        <div className="md:w-2/4 h-auto flex flex-col items-center justify-center gap-y-5 z-10">
            {badgeValue && <Badge color="none" className="px-5 py-2 rounded-xl border border-custom-textPrimaryGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-bold">{badgeValue}</Badge>}
            <h1 className={`${titleStyle} text-balance text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-bold`} ref={titleRef}>{titleValue}</h1>
            <p className={`${descriptionStyle} text-balance text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray font-light`} ref={captionRef}>{descriptionValue}</p>
        </div>
    );
}

