import { Dispatch, SetStateAction } from "react";
// Axios
import axios from 'axios';
// React router
import { NavigateFunction, useNavigate } from "react-router-dom";
// I18Next
import { useTranslation } from 'react-i18next';
// Flowbite
import { Button } from "flowbite-react";
// Components
import ModalBase from "./ModalBase";

interface ModalLogoutProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

//Url server produzione
const SERVER_URL = 'http://localhost:3000';

export default function ModalLogout({ setPageSelected }: ModalLogoutProps) {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    // Funzione per effettuare il logout dall'app
    const handleSingout = async () => {
        try {
            const response = await axios.post(`${SERVER_URL}/signout`);
            if (response.status === 200) {
                localStorage.removeItem('authToken');
                alert('Logout effettuato correttamente'); // MODIFICARE GLI ALERT //
                navigate('/');
            } else {
                alert('Errore nella fase di logout'); // MODIFICARE GLI ALERT //
                return;
            }
        } catch (error) {
            console.error("An unexpected error occurred", error);
        }
    }

    return (
        <ModalBase size="md" modalTitle="Esci dal tuo account" onClose={() => setPageSelected("Genera")}>
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
