import { Badge } from "flowbite-react";

interface IntestazioneProps {
    badgeValue: string;
    titleValue: string;
    descriptionValue: string;
}

export default function Intestazione({ badgeValue, titleValue, descriptionValue }: IntestazioneProps) {
    return (
        <div className="w-[90%] md:w-1/3 h-auto flex flex-col items-center justify-center gap-y-3">
            <Badge color="none" className="px-5 py-2 rounded-xl border">{badgeValue}</Badge>
            <h1 className="text-5xl font-bold text-center">{titleValue}</h1>
            <p className="text-sm font-light text-center">{descriptionValue}</p>
        </div>
    );
}
