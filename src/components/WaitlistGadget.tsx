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
import { LoadingIncon, SparklingStars } from "./SvgComponents";

// Url del server di produzione
//const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

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
            <form className={`flex flex-col items-start justify-center w-full gap-y-5 z-10 ${mdWidth ? mdWidth : 'md:w-2/6'}`}>
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
                    <button
                        disabled
                        type="button"
                        className="w-full p-3 inline-flex items-center justify-center gap-x-3 text-md font-semibold text-dark-textPrimaryGray rounded-lg  bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                        {t('bottoneCaricamentoWaitlist')}
                        <LoadingIncon />
                    </button>
                ) : (
                    <button
                        onClick={submitWaitlist}
                        type="submit"
                        className={`w-full p-3 inline-flex items-center justify-center gap-x-3 text-md font-semibold text-dark-textPrimaryGray rounded-lg border-none ring-none ${buttonColor ? buttonColor : 'bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor border-0'}`}>
                        {t('bottoneIscriviWaitlist')}
                        <SparklingStars />
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
