import { Dispatch, SetStateAction } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ModalBase from "./ModalBase";
import { SendIcon } from "./SvgComponents";

interface ModalHelpProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalHelp({ setPageSelected }: ModalHelpProps) {

    const { t } = useTranslation();

    const handleSendComment = () => {
        console.log('Send comment');
    }

    return (
        <ModalBase size="md" modalTitle={t('modalHelpTitle')} onClose={() => setPageSelected("Genera")}>
            {/* Intestazione */}
            <div className="w-full h-auto flex flex-col rounded-lg bg-custom-elevation4 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray">
                <div className="w-full p-3 rounded-t-lg border-b border-custom-borderGray dark:border-dark-borderGray">
                    <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance">
                        Segnalaci il quesito d'errore che hai riscontrato, cerca di essere breve e conciso in modo da darci la possibilità di risponderti e risolvere il problema in tempi brevi. Grazie!!
                    </p>
                </div>
                {/* Textarea */}
                <textarea
                    className="w-full min-h-52 overflow-scroll resize-none border-none focus:ring-0 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray bg-custom-elevation4 dark:bg-dark-elevation3 "
                    placeholder="Leave your comment here..." />
                {/* Bottone per l'invio */}
                <div className="w-full flex items-center justify-end p-3 rounded-b-lg bg-custom-elevation2 dark:bg-dark-elevation2 ">
                    <button
                        type="button"
                        className="w-fit flex gap-x-2 p-2.5 rounded-lg  bg-custom-accent dark:bg-dark-accent text-dark-textPrimaryColor"
                        onClick={() => handleSendComment()}>
                        Send
                        <SendIcon />
                    </button>
                </div>
            </div>
        </ModalBase>
    );
}
