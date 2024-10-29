// React
import { Dispatch, SetStateAction } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ActiveButton from "./ActiveButton";
import ModalBase from "./ModalBase";

export default function ModalMessage({ onClose, setExploding }: { onClose: () => void, setExploding: Dispatch<SetStateAction<boolean>> }) {

    // Compoonente per la traduzione
    const { t } = useTranslation();

    // Funzione per chiudere il modal e far partire i coriandoli
    const handleCloseMessage = () => {
        setExploding(true);
        onClose();
    }

    return (
        <ModalBase size="md" modalTitle={t('modalMessageTitoloModal')} onClose={onClose}>
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                <h1 className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    {t('modalMessageTitolo')} 🎉
                </h1>
                <p className="text-lg text-balance text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('modalMessageDescrizione')}
                </p>
                <ActiveButton text={t('modalMessageBottone')} onClick={handleCloseMessage} />
            </div>
        </ModalBase>
    );
}
