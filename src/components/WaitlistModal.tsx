// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ModalBase from "./ModalBase";
import WaitlistGadget from "./WaitlistGadget";

export default function WaitlistModal({ onClose }: { onClose: () => void; }) {

    // Componente per le traduzioni
    const { t } = useTranslation();

    return (
        <ModalBase size="md" modalTitle={t('modalWaitlistTitoloModal')} onClose={onClose}>
            <div className="flex items-center justify-center flex-wrap gap-y-7">
                <h1 className=" font-bold text-4xl text-balance text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    🚀 {t('modalWaitlistTitolo')}
                </h1>
                <p className="font-light text-balance text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('modalWaitlistDescrizione1')}
                </p>
                <p className="font-light text-balance text-center text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('modalWaitlistDescrizione2')}
                </p>
                <WaitlistGadget mdWidth="w-full" />
            </div>
        </ModalBase>
    );
}
