// React
import { useState } from "react";
// Rect-dom
import { renderToString } from 'react-dom/server';
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Axios
import axios from 'axios';
// I18Next
import { useTranslation } from 'react-i18next';
// Confetti-Explosion
import ConfettiExplosion from 'react-confetti-explosion';
// Utilities
import { useEmail } from "../utilities/useEmail";
// Components
import ModalMessage from "./ModalMessage";
import EmailWaitlist from "./EmailWaitlist";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

export default function WaitlistGadget({ buttonColor, mdWidth }: { buttonColor?: string, mdWidth?: string }) {

    //Componente per la traduzione
    const { t } = useTranslation();

    const [emailInput, setEmailInput] = useState<string>(""); //Valore dell'email inserita dall'utente
    const [errorInput, setErrorInput] = useState<string>(""); //Imposta messaggio di errore
    const [isEmailLoading, setEmailLoading] = useState<boolean>(false); //Imposta in stato di loading
    const [isEmailSend, setEmailSend] = useState<boolean>(false); //Imposta in stato di inviato
    const [isExploding, setExploding] = useState<boolean>(false); //Attiva l'animazione dei coriandoli

    // Convenerte il file React/Html in string
    const htmlString = renderToString(<EmailWaitlist />);

    // Funzione per inviare email di benvenuto tramite le API di Resend
    const sendWaitlistEmail = async () => {
        try {
            const response = await axios.post(`${SERVER_URL}/send-email`, {
                emailReciver: emailInput,
                emailSubject: 'Benvenuto nella waitlist',
                email: htmlString,
            });
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error: any) {
            console.error("ERRORE CLIENT: ", error.message);
            return false;
        }
    }

    // Funzione per aggiungere un'utente alla waitlist
    const submitWaitlist = async (e: any) => {
        e.preventDefault();
        setEmailLoading(true);
        setErrorInput("");
        if (useEmail(emailInput)) {
            try {
                const response = await axios.post(`${SERVER_URL}/signup-to-waitlist`, { email: emailInput });
                if (response.status === 200) {
                    const emailSent = await sendWaitlistEmail();
                    if (emailSent) {
                        setEmailLoading(false);
                        setEmailInput("");
                        setEmailSend(true);
                    } else {
                        toast.warn(t('erroreInvioEmailWaitlist'));
                        console.error("CLIENT: Iscrizione alla waitlist effettuata, invio email non andato a buon fine");
                        handleErrorWaitlist();
                    }
                } else {
                    toast.error(t('erroreIscrizioneWaitlist'));
                    console.error("CLIENT: Errore durante l'iscrizione alla waitlist");
                    handleErrorWaitlist();
                }
            } catch (error: any) {
                toast.error(t('erroreImprevistoWaitlist'));
                console.error("CLIENT: Errore imprevisto durante l'iscrizione alla waitlist", error.message);
                handleErrorWaitlist();
            }
        } else {
            setErrorInput(t('erroreInputWaitlist'));
            setEmailLoading(false);
        }
    };

    // Funzione per gestire gli stati in caso di errore
    const handleErrorWaitlist = () => {
        setEmailLoading(false);
        setEmailInput("");
    }

    return (
        <>
            <form className={`flex flex-col md:flex-row items-start justify-center w-full gap-y-5 z-10 ${mdWidth ? mdWidth : 'md:w-2/6'}`}>
                {/* Email input */}
                <div className="w-full">
                    <input
                        type="email"
                        name="email-input"
                        className={`w-full bg-custom-elevation dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusGray dark:focus:border-dark-borderFocusGray focus:ring-custom-borderRingGray dark:focus:ring-dark-borderRingGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray text-sm rounded-lg block p-3 font-light ${errorInput !== "" && 'border-red-500 dark:border-red-500'}`}
                        placeholder="name@describify.com"
                        value={emailInput}
                        onFocus={() => setErrorInput("")}
                        onChange={(event) => setEmailInput(event.target.value)} />
                    <p className={`w-full mt-2 px-3 text-sm font-medium text-red-500 dark:text-red-500 ${errorInput !== "" ? 'flex' : 'hidden'}`}>
                        {errorInput}
                    </p>
                </div>
                {/* Buttons */}
                {isEmailLoading ? (
                    <button disabled type="button" className=" inline-flex items-center justify-center w-full md:w-min py-3 px-5 md:ms-2 text-sm font-semibold text-dark-textPrimaryGray rounded-lg border bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                        {t('bottoneCaricamentoWaitlist')}
                    </button>
                ) : (
                    <button
                        onClick={submitWaitlist}
                        type="submit"
                        className={`w-full md:w-min py-3 px-5 md:ms-2 text-sm font-semibold text-dark-textPrimaryGray rounded-lg border ${buttonColor ? buttonColor : 'bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor border-0'}`}>
                        {t('bottoneIscriviWaitlist')}
                    </button>
                )}
                {/* Modal message */}
                {isEmailSend && <ModalMessage onClose={() => setEmailSend(false)} setExploding={setExploding} />}
                {/* Confetti-Explosion */}
                {isExploding && <ConfettiExplosion zIndex={100} force={0.8} duration={3000} particleCount={250} onComplete={() => setExploding(false)} />}
            </form >
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={1500} />
        </>
    );
}
