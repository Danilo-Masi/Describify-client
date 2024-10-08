import { Dispatch, SetStateAction } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import ModalBase from "./ModalBase";

interface ModalUsageProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalUsage({ setPageSelected }: ModalUsageProps) {

    const { t } = useTranslation();

    return (
        <ModalBase size="md" modalTitle={t('modalUsageTitle')} onClose={() => setPageSelected("Genera")}>
            <h1 className="text-white">Grafico di utilizzo</h1>
        </ModalBase>
    );
}
