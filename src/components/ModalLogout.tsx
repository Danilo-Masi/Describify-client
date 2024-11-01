// React
import { Dispatch, SetStateAction } from "react";
// React router
import { NavigateFunction, useNavigate } from "react-router-dom";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Flowbite-react
import { Button } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Components
import ModalBase from "./ModalBase";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export default function ModalLogout({ setPageSelected }: { setPageSelected: Dispatch<SetStateAction<string>>; }) {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    // Funzione per effettuare il logout dall'app
    const handleSingout = async () => {
        try {
            const response = await axios.post(`${SERVER_URL}/signout`);
            if (response.status === 200) {
                localStorage.removeItem('authToken');
                navigate('/');
            } else {
                console.error('CLIENT: Errore durante la fase di login, controlla server');
                toast.error(t('modalLogoutErroreServer'));
                return;
            }
        } catch (error: any) {
            console.error("CLIENT: Errore inaspettato durante il logout", error.message);
            toast.error(t('modalLogoutErroreServer')); 
        }
    }

    return (
        <>
            <ModalBase size="md" modalTitle="Esci dal tuo account" onClose={() => setPageSelected("Genera")}>
                <div className="flex flex-col items-center justify-center gap-y-5 text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                    <h1 className="text-2xl font-bold">
                        {t('modalLogoutTitolo')}
                    </h1>
                    <p className="text-md font-normal text-balance text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        {t('modalLogoutDescrizione')}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={() => handleSingout()}>
                            {t('modalLogoutBottoneAccetta')}
                        </Button>
                        <Button color="gray" onClick={() => setPageSelected("Genera")}>
                            {t('modalLogoutBottoneAnnulla')}
                        </Button>
                    </div>
                </div>
            </ModalBase>
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </>
    );
}
