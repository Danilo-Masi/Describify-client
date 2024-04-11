import { useEffect, useRef, useState } from "react";
//Axios
import axios from 'axios';
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//Components˚
import ModalMessage from "./ModalMessage";
//Resend
import { Resend } from 'resend';

// Funzione per validare l'email lato Client
const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
}

interface WaitlistGadgetProps {
    mdWidth?: string;
    buttonColor?: string;
    borderAnimation?: boolean;
}

export default function WaitlistGadget({ buttonColor, mdWidth, borderAnimation }: WaitlistGadgetProps) {

    const [emailInput, setEmailInput] = useState("");
    const [errorInput, setErrorInput] = useState("");
    const [emailLoading, setEmailLoading] = useState(false);
    const [emailSend, setEmailSend] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;
        gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: form }, delay: 1 });
    }, []);

    //Funzione per inviare l'email di confermata iscrizione alla waitlist
    const sendWaitlistEmail = async () => {

        const resendKey: string = import.meta.env.VITE_RESEND_API_KEY;
        const resend = new Resend(resendKey);

        try {
            /* Richiesta invio email al Server **NON FUNZIONA**
            const response = await axios.post('http://localhost:3000/send-email', { email: emailInput });
            */
            const { data, error } = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: emailInput,
                subject: 'Hello World',
                html: '<strong>It works FINALLY!</strong>',
            });
            if (error) {
                return console.error(error);
            }
            console.log(data);
            alert('Iscrizione effettuata correttamente, controlla la tua casella postale!!');
            setEmailSend(true);
        } catch (error) {
            console.error(error);
            return;
        }
    }

    //Funzione per aggiungere un email al software di waitlist
    const submitWaitlist = async (e: any) => {
        e.preventDefault();
        setEmailLoading(true);
        setErrorInput("");
        if (validateEmail(emailInput)) {
            try {
                //const response = await axios.post('http://localhost:3000/api/signup-to-waitlist', { email: emailInput });
                // Eventi se la richiesta ha successo
                sendWaitlistEmail();
                {
                    emailSend &&
                    setEmailLoading(false);
                    setEmailInput("");
                }
            } catch (error: any) {
                if (error.response) {
                    console.error('Data:', error.response.data);
                    console.error('Status:', error.response.status);
                    console.error('Headers:', error.response.headers);
                } else if (error.request) {
                    // La richiesta è stata fatta ma non è stata ricevuta alcuna risposta
                    console.error('Request:', error.request);
                } else if (error.config) {
                    // Informazioni aggiuntive se disponibili
                    console.error('Config:', error.config);
                } else {
                    // Qualcosa è andato storto nella configurazione della richiesta
                    console.error('Error Message:', error.message);
                }
                // CREARE MODAL CHE FA VISUALIZZARE L'ERRORE //
                setEmailLoading(false);
                setEmailInput("");
            }
        } else {
            setErrorInput("Errore nella digitazione dell'email");
            setEmailLoading(false);
            return;
        }
    };

    return (
        <form className={`flex flex-col md:flex-row items-start justify-center w-full gap-y-5 ${mdWidth ? mdWidth : 'md:w-2/6'}`} ref={formRef}>
            {/* Email input */}
            <div className="w-full">
                <input
                    type="email"
                    name="email-input"
                    className={`w-full bg-custom-elevation dark:bg-dark-elevation border border-custom-border dark:border-dark-border text-custom-textPrimary dark:text-dark-textPrimary placeholder:text-custom-textSecondary dark:placeholder:text-dark-textSecondary text-sm rounded-lg block p-3 ${errorInput && 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-transparent'} ${borderAnimation ? 'animate-pulse' : ''}`}
                    placeholder="name@describify.com"
                    value={emailInput}
                    onChange={(event) => setEmailInput(event.target.value)} />
                <p className={`w-full mt-2 px-3 text-sm font-medium text-red-600 dark:text-red-500 ${errorInput !== "" ? 'flex' : 'hidden'}`}>
                    {errorInput}
                </p>
            </div>
            {/* Buttons */}
            {emailLoading ? (
                <button disabled type="button" className=" inline-flex items-center justify-center w-full md:w-min py-3 px-5 md:ms-2 text-sm font-medium text-dark-textPrimary rounded-lg border 'bg-custom-accent dark:bg-dark-accent border-custom-accent dark:border-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent">
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
                    className={`w-full md:w-min py-3 px-5 md:ms-2 text-sm font-medium text-dark-textPrimary rounded-lg border ${buttonColor ? buttonColor : 'bg-custom-accent dark:bg-dark-accent border-custom-accent dark:border-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent'}`}>
                    Subriscribe
                </button>
            )}
            {/* Modal */}
            {emailSend ? <ModalMessage onClose={() => setEmailSend(false)} /> : ''}
        </form >

    )
}
