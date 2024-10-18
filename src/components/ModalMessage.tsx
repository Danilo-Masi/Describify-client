// React
import { Dispatch, SetStateAction } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ActiveButton from "./ActiveButton";
import ModalBase from "./ModalBase";

interface ModalMessageProps {
    onClose: () => void;
    setExploding: Dispatch<SetStateAction<boolean>>;
}

export default function ModalMessage({ onClose, setExploding }: ModalMessageProps) {

    const { t } = useTranslation();

    // Funzione per attivare i coriandoli e chiudere il modal
    const handleClick = () => {
        setExploding(true);
        onClose();
    }

    return (
        <ModalBase size="sm" modalTitle="Benvenuto in Describify" onClose={onClose}>
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                <h1 className="text-4xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    {t('modalMessageTitle')} &#127881;
                </h1>
                <p className="text-lg font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('modalMessageContent')}
                </p>
                <ActiveButton text={t('modalMessageButton')} onClick={handleClick} />
            </div>
        </ModalBase>
    );
}
