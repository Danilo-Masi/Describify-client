import { useEffect, useRef } from "react";
//Utilities
import { handleFade } from '../utilities/useAnimations';
//Flowbite
import { Badge } from "flowbite-react";

interface IntestazioneProps {
    badgeValue?: string;
    titleValue: string;
    descriptionValue: string;
    accessToken?: boolean;
    titleDimension?: string;
    mdTitleDimension?: string;
    descriptionDimension?: string;
}

export default function Intestazione({ badgeValue, titleValue, descriptionValue, accessToken, titleDimension, mdTitleDimension, descriptionDimension }: IntestazioneProps) {

    const titleRef = useRef(null);
    const captionRef = useRef(null);

    useEffect(() => {
        //Reference
        const title = titleRef.current || "";
        const caption = captionRef.current || "";
        //Avvio delle animazioni
        handleFade(title, 0.5, 0.0);
        handleFade(caption, 0.5, 0.5);
    }, [accessToken]);

    return (
        <div className="md:w-2/4 h-auto flex flex-col items-center justify-center gap-y-5 z-10">
            {badgeValue && <Badge color="none" className="px-5 py-2 rounded-xl border border-custom-textPrimaryGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-bold">{badgeValue}</Badge>}
            <h1 className={`${titleDimension ? titleDimension : 'text-5xl'} ${mdTitleDimension ? mdTitleDimension : 'md:text-6xl'} text-balance text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-bold`} ref={titleRef}>{titleValue}</h1>
            <p className={`${descriptionDimension ? descriptionDimension : 'text-lg'} text-balance text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray font-light`} ref={captionRef}>{descriptionValue}</p>
        </div>
    );
}

