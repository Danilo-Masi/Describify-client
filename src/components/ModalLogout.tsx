import { Dispatch, SetStateAction } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Flowbite
import { Button } from "flowbite-react";
//Components
import ModalBase from "./ModalBase";

interface ModalLogoutProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalLogout({ setPageSelected }: ModalLogoutProps) {

    const { t } = useTranslation();

    const handleSingout = () => {
        console.log("Esci dall'applicazione");
    }

    return (
        <ModalBase size="sm" modalTitle="" onClose={() => setPageSelected("Genera")}>
            <div className="flex flex-col items-center justify-center gap-y-5 text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                <h1 className="text-2xl font-bold">{t('modalLogoutTitle')}</h1>
                <p className="text-md font-normal text-balance text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('modalLogoutCaption')}
                </p>
                <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => handleSingout()}>
                        {t('modalLogoutAcceptButton')}
                    </Button>
                    <Button color="gray" onClick={() => setPageSelected("Genera")}>
                        {t('modalLogoutCancelButton')}
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
}
