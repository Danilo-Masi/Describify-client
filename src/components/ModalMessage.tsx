// React
import { Dispatch, SetStateAction } from "react";
// Flowbite
import { Modal } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ActiveButton from "./ActiveButton";

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
        <Modal show position="center" size="md" className="bg-dark-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg py-10 flex flex-col gap-y-5 items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                    <h1 className="text-4xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        {t('modalMessageTitle')} &#127881;
                    </h1>
                    <p className="text-lg font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        {t('modalMessageContent')}
                    </p>
                </div>
                <ActiveButton text={t('modalMessageButton')} onClick={handleClick} />
            </Modal.Body>
        </Modal >
    );
}
