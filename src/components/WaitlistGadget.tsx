import { Dispatch, SetStateAction, useState } from "react";
//Axios
import axios from 'axios';
//I18Next
import { useTranslation } from 'react-i18next';
//Confetti-Explosion
import ConfettiExplosion from 'react-confetti-explosion';
//Utilities
import { useEmail } from "../utilities/useEmail";
//Components
import ModalMessage from "./ModalMessage";

interface WaitlistGadgetProps {
    mdWidth?: string;
    buttonColor?: string;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function WaitlistGadget({ buttonColor, mdWidth, setAlertOpen, setAlertMessage }: WaitlistGadgetProps) {

    const { t } = useTranslation();

    const [emailInput, setEmailInput] = useState(""); //Valore dell'email inserita dall'utente
    const [errorInput, setErrorInput] = useState(""); //Imposta messaggio di errore
    const [isEmailLoading, setEmailLoading] = useState(false); //Imposta in stato di loading
    const [isEmailSend, setEmailSend] = useState(false); //Imposta in stato di inviato
    const [isExploding, setExploding] = useState(false); //Attiva l'animazione dei coriandoli

    //Url del server
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL || 'http://localhost:3000';

    //Funzione per inviare l'email una volta iscritti alla waitlist (Resend)
    const sendWaitlistEmail = async (language: string) => {
        try {
            const response = await axios.post(`${SERVER_URL}/send-email`, {
                email: emailInput,
                language: language,
            });
            if (response.status === 200) {
                return true;
            }
            return false;
        } catch (error) {
            console.error("Errore nel metodo dell'invio dell'email", error);
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
                    const language = localStorage.getItem('i18nextLng') || 'it';
                    const emailSent = await sendWaitlistEmail(language);
                    if (emailSent) {
                        setEmailLoading(false);
                        setEmailInput("");
                        setEmailSend(true);
                    } else {
                        setEmailLoading(false);
                        setEmailInput("");
                        //Errore nell'invio dell'email
                        console.error("Iscrizione alla waitlist effettuata, invio email non andato a buon fine");
                        setAlertMessage(t('emailErrorSend'));
                        setAlertOpen(true);
                    }
                } else {
                    setEmailLoading(false);
                    setEmailInput("");
                    //Errore nell'iscrizione alla waitlist
                    console.error("Errore durante l'iscrizione alla waitlist");
                    setAlertMessage(t('emailErrorWaitlist'));
                    setAlertOpen(true);
                }
            } catch (error) {
                setEmailLoading(false);
                setEmailInput("");
                //Errore "imprevisto" nell'iscrizione alla waitlist
                console.error("Errore imprevisto durante l'iscrizione alla waitlist", error);
                setAlertMessage(t('emailErrorWaitlist'));
                setAlertOpen(true);
            }
        } else {
            //Email digitata male
            setErrorInput(t('emailErrorDigit'));
            setEmailLoading(false);
        }
    };

    return (
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
                    Loading...
                </button>
            ) : (
                <button
                    onClick={submitWaitlist}
                    type="submit"
                    className={`w-full md:w-min py-3 px-5 md:ms-2 text-sm font-semibold text-dark-textPrimaryGray rounded-lg border ${buttonColor ? buttonColor : 'bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor border-0'}`}>
                    {t('buttonSubscribe')}
                </button>
            )}
            {/* Modal message */}
            {isEmailSend && <ModalMessage onClose={() => setEmailSend(false)} setExploding={setExploding} />}
            {/* Confetti-Explosion */}
            {isExploding && <ConfettiExplosion zIndex={100} force={0.8} duration={3000} particleCount={250} />}
        </form >
    );
}
