// React
import { useEffect, useState } from "react";
// Flowbite-react
import { Textarea } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useCopy } from "../utilities/useCopy";
import { CopiedIcon, CopyIcon } from "./SvgComponents";

export default function ProductGenerateText({ divStyle, titolo, placeholder, testoGenerato }: { divStyle: string, titolo: string, placeholder: string, testoGenerato: string }) {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Stato che tiene traccia del valore della descrizione
    const [valoreTesto, setValoreTesto] = useState(testoGenerato);
    // Stato che verifica se il bottone copia è attivabile o meno
    const [isCopiato, setCopiato] = useState(false);

    // Effetto per impostare il valore della descrizione
    useEffect(() => {
        setValoreTesto(testoGenerato);
    }, [testoGenerato]);

    // Effetto per far copiare il valore della descrizione
    const handleCopy = () => {
        useCopy(valoreTesto);
        setCopiato(true);
        setTimeout(() => {
            setCopiato(false);
        }, 3000);
    }

    return (
        <div className={`${divStyle} w-full flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray`}>
            {/* Titolo e bottone copia */}
            <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    {titolo}
                </h1>
                <button
                    type="button"
                    disabled={valoreTesto === "" ? true : false}
                    onClick={handleCopy}
                    className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
                    {!isCopiato ? (
                        <p className="flex gap-x-3">
                            {t('productGenerateTextCopia')}
                            <CopyIcon />
                        </p>
                    ) : (
                        <p className="flex gap-x-3">
                            {t('productGenerateTextCopiato')}
                            <CopiedIcon />
                        </p>
                    )}
                </button>
            </div>
            {/* Area testo */}
            <Textarea
                name="textarea descrizione"
                placeholder={placeholder}
                value={valoreTesto}
                onChange={e => setValoreTesto(e.target.value)}
                className="w-full h-full overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}
