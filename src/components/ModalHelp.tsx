import { Dispatch, SetStateAction } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import ModalBase from "./ModalBase";

interface ModalHelpProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalHelp({ setPageSelected }: ModalHelpProps) {

    const { t } = useTranslation();

    return (
        <ModalBase size="md" modalTitle={t('modalHelpTitle')} onClose={() => setPageSelected("Genera")}>
            <h1>ciao</h1>
        </ModalBase>
    );
}
