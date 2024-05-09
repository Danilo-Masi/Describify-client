//I18Next
import { useTranslation } from 'react-i18next';
//Flowbite
import { Modal, ModalHeader } from "flowbite-react";
//Components
import WaitlistGadget from "./WaitlistGadget";

interface WaitlistModalProps {
    onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {

    const { t } = useTranslation();

    return (
        <Modal
            show
            size="md"
            position="center"
            className="bg-dark-background dark:bg-dark-background">
            <ModalHeader className='bg-custom-elevation dark:bg-dark-elevation4 border-b-0 rounded-t-lg pb-0' onClick={onClose} />
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-b-lg pb-10">
                <div className="flex flex-wrap gap-y-7 font-poppins">
                    <h1 className="text-4xl text-balance text-center font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        &#128640; {t('waitlistBannerTitle')}
                    </h1>
                    <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance text-center font-light">
                        {t('waitlistBannerContent')}
                    </p>
                    <WaitlistGadget mdWidth="w-full" />
                </div>
            </Modal.Body>
        </Modal>
    );
}
