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
}

export default function Intestazione({ badgeValue, titleValue, descriptionValue, accessToken }: IntestazioneProps) {

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
        <div className="md:w-1/3 h-auto flex flex-col items-center justify-center gap-y-5">
            {badgeValue && <Badge color="none" className="px-5 py-2 rounded-xl border border-custom-border text-custom-textPrimary dark:border-dark-border dark:text-dark-textPrimary">{badgeValue}</Badge> }
            <h1 className="text-6xl text-balance font-bold text-center text-custom-textPrimary dark:text-dark-textPrimary" ref={titleRef}>{titleValue}</h1>
            <p className="text-md text-balance font-light text-center text-custom-textSecondary dark:text-dark-textSecondary" ref={captionRef}>{descriptionValue}</p>
        </div>
    );
}

