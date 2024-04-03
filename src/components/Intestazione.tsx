//Flowbite
import { Badge } from "flowbite-react";

interface IntestazioneProps {
    badgeValue: string;
    titleValue: string;
    descriptionValue: string;
}

export default function Intestazione({ badgeValue, titleValue, descriptionValue }: IntestazioneProps) {
    return (
        <div className="md:w-1/3 h-auto flex flex-col items-center justify-center gap-y-5">
            <Badge color="none" className="px-5 py-2 rounded-xl border border-custom-border text-custom-textPrimary dark:border-dark-border dark:text-dark-textPrimary">{badgeValue}</Badge>
            <h1 className="text-6xl text-balance font-bold text-center text-custom-textPrimary dark:text-dark-textPrimary">{titleValue}</h1>
            <p className="text-md text-balance font-light text-center text-custom-textSecondary dark:text-dark-textSecondary">{descriptionValue}</p>
        </div>
    );
}
