import { useEffect, useRef } from "react";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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
        //GSAP
        const title = titleRef.current;
        const caption = captionRef.current;
        gsap.fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: title } });
        gsap.fromTo(caption, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: caption }, delay: 0.5 });
        // Cleanup 
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [accessToken]);

    return (
        <div className="md:w-2/4 h-auto flex flex-col items-center justify-center gap-y-5 z-10">
            {badgeValue && <Badge color="none" className="px-5 py-2 rounded-xl border border-custom-textPrimaryGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{badgeValue}</Badge>}
            <h1 className={`${titleDimension ? titleDimension : 'text-6xl'} ${mdTitleDimension} text-balance font-bold text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray`} ref={titleRef}>{titleValue}</h1>
            <p className={`${descriptionDimension ? descriptionDimension : 'text-md'} text-balance font-light text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray`} ref={captionRef}>{descriptionValue}</p>
        </div>
    );
}

