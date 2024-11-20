// React
import { useEffect, useState } from "react";
// Flowbite-react
import { Textarea } from "flowbite-react";

export default function ProductGenerateText({ divStyle, titolo, placeholder, testoGenerato }: { divStyle: string, titolo: string, placeholder: string, testoGenerato: string }) {

    // Stato che tiene traccia del valore della descrizione
    const [valoreTesto, setValoreTesto] = useState(testoGenerato);

    // Effetto per impostare il valore della descrizione
    useEffect(() => {
        setValoreTesto(testoGenerato);
    }, [testoGenerato]);

    return (
        <div className={`${divStyle} w-full flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray`}>
            {/* Titolo */}
            <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {titolo}
            </h1>
            {/* Area di testo */}
            <Textarea
                name="textarea descrizione"
                placeholder={placeholder}
                value={valoreTesto}
                onChange={e => setValoreTesto(e.target.value)}
                className="w-full h-full overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}
