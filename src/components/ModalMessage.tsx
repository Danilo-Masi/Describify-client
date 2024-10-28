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
        <ModalBase size="md" modalTitle="Benvenuto in Describify" onClose={onClose}>
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                <h1 className="text-3xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    Benvenuto nella community di Describify! 🎉
                </h1>
                <p className="text-lg font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    Grazie per esserti unito alla nostra waitlist! Sarai tra i primi a sapere quando la piattaforma sarà pronta e riceverai un accesso prioritario a un prezzo esclusivo.
                </p>
                <ActiveButton text="Perfetto, grazie!" onClick={handleClick} />
            </div>
        </ModalBase>
    );
}
