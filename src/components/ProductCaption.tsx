import { useEffect, useState } from "react";
// Flowbite
import { Textarea } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useCopy } from "../utilities/useCopy";

interface ProductCaptionProps {
    descriptionGenerated: string;
    descriptionPlaceholder: string;
}

export default function ProductCaption({ descriptionGenerated, descriptionPlaceholder }: ProductCaptionProps) {

    const { t } = useTranslation();

    const [valoreDescrizione, setValoreDescrizione] = useState(descriptionGenerated);
    const [copiato, setCopiato] = useState(false);

    useEffect(() => {
        setValoreDescrizione(descriptionGenerated);
    }, [descriptionGenerated]);

    const handleCopy = () => {
        useCopy(valoreDescrizione);
        setCopiato(true);
        setTimeout(() => {
            setCopiato(false);
        }, 3000);
    }

    return (
        <div className="w-full h-2/3 min-h-fit  flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('productFormDescriptionLabel')}</h1>
                <button
                    disabled={valoreDescrizione === "" ? true : false}
                    onClick={handleCopy}
                    type="button"
                    className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
                    {!copiato ? (
                        <p className="flex gap-x-3">
                            {t('productCopyButton')}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                        </p>
                    ) : (
                        <p className="flex gap-x-3">
                            {t('productCopiedButton')}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </p>
                    )}
                </button>
            </div>
            {/* Area testo */}
            <Textarea
                name="textarea descrizione"
                onChange={e => setValoreDescrizione(e.target.value)}
                value={valoreDescrizione}
                placeholder={descriptionPlaceholder}
                className="w-full h-[40svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}
