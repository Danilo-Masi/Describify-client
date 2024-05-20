import { Dispatch, SetStateAction } from "react";
//Flowbite
import { Modal } from "flowbite-react";
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import ActiveButton from "./ActiveButton";

interface ModalMessageProps {
    onClose: () => void;
    setExploding: Dispatch<SetStateAction<boolean>>;
}

export default function ModalMessage({ onClose, setExploding }: ModalMessageProps) {

    const { t } = useTranslation();

    const handleClick = () => {
        setExploding(true);
        onClose();
    }

    return (
        <Modal show size="sm" className="bg-dark-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg py-10 flex flex-col gap-y-5 items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                    <h1 className="text-4xl text-balance font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        {t('messageBannerTitle')} &#127881;
                    </h1>
                    <p className="text-md md:text-md text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        {t('messageBannerContent')}
                    </p>
                </div>
                <ActiveButton text={t('messageBannerButton')} onClick={handleClick} />
            </Modal.Body>
        </Modal >
    );
}
