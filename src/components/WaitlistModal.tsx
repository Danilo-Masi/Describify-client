// Flowbite-react
import { Modal, ModalHeader } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import WaitlistGadget from "./WaitlistGadget";
import ModalBase from "./ModalBase";

export default function WaitlistModal({ onClose }: { onClose: () => void; }) {

    const { t } = useTranslation();

    return (
        <ModalBase size="md" modalTitle="Iscriviti alla waitlist" onClose={onClose}>
            <div className="flex items-center justify-center flex-wrap gap-y-7 font-inter">
                <h1 className="text-4xl text-balance text-center font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    &#128640; Siamo quasi pronti...
                </h1>
                <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance text-center font-light">
                    Se ti iscrivi ADESSO alla waitlist avrai la possibilità di essere tra i primi ad accedere alla piattaforma e ad avere un prezzo ribassato!!
                </p>
                <WaitlistGadget mdWidth="w-full" />
            </div>
        </ModalBase>
    );
}
