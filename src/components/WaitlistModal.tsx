// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ModalBase from "./ModalBase";
import WaitlistGadget from "./WaitlistGadget";

export default function WaitlistModal({ onClose }: { onClose: () => void; }) {

    const { t } = useTranslation();

    return (
        <ModalBase size="lg" modalTitle="Iscriviti alla waitlist" onClose={onClose}>
            <div className="flex items-center justify-center flex-wrap gap-y-7">
                <h1 className=" font-bold text-4xl text-balance text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    🚀 Preparati a partire con noi!
                </h1>
                <p className="font-light text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    Entra nella nostra waitlist oggi stesso e assicurati l'accesso anticipato alla piattaforma.
                </p>
                <p className="font-light text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    <strong className='font-semibold'> Gli iscritti alla waitlist avranno accesso esclusivo</strong> alle nostre funzionalità iniziali e potranno godere di un
                    <strong className='font-semibold'> prezzo speciale riservato!</strong>
                </p>
                <WaitlistGadget mdWidth="w-full" />
            </div>
        </ModalBase>
    );
}
