// React
import { Dispatch, SetStateAction, useState } from "react";
// React-icons
import { IoIosSend } from "react-icons/io";
// Rect-dom
import { renderToString } from 'react-dom/server';
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Components
import ModalBase from "./ModalBase";
import EmailHelp from "./EmailHelp";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

// Componente grafico per contenere i messaggi tra l'utente e il sistema
const ChatBubble = ({ messageStyle, messageSender, messageText }: { messageStyle: string, messageSender: string, messageText: string }) => {
    return (
        <div className={`w-full h-auto flex flex-col gap-y-2 p-3 rounded-lg ${messageStyle}`}>
            <p className="font-medium text-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{messageSender}</p>
            <p className="font-light text-base text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{messageText}</p>
        </div>
    );
}

export default function ModalHelp({ setPageSelected }: { setPageSelected: Dispatch<SetStateAction<string>>; }) {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Stato per gestire il testo dell'input dell'utente
    const [text, setText] = useState<string>("");
    // Stato che mostra il testo dell'utente in una bubble chat
    const [messageText, setMessageText] = useState<string>("");
    // Stato per gestire la fase di loading 
    const [isLoading, setLoading] = useState<boolean>(false);

    // Funzione per resettare i vari stati
    const resetStates = () => {
        setText("");
        setLoading(false);
    }

    // Funzione per chiudere il modal
    const handleCloseModalHelp = () => {
        resetStates();
        setMessageText("");
        setPageSelected("Genera");
    }

    // Funzione per inviare l'email con il testo inserito dall'utente
    const handleSendComment = async () => {
        setLoading(true);
        if (text.trim().length > 0) {
            // Trasforma il file React-html in string
            const htmlString = renderToString(<EmailHelp text={text} />);
            try {
                const response = await axios.post(`${SERVER_URL}/send-email`, {
                    emailReciver: 'info@describify.it',
                    emailSubject: 'Feedback',
                    email: htmlString,
                });
                if (response.status === 200) {
                    setMessageText(text);
                    resetStates();
                } else {
                    console.error("CLIENT: Errore durante l'invio del messaggio, response.status !== 200");
                    toast.error(t('modalHelpErrore200'));
                    resetStates();
                }
            } catch (error: any) {
                console.error("CLIENT: Impossibile inviare il messaggio", error.message);
                toast.error(t('modalHelpErroreRete'));
                resetStates();
            } finally {
                resetStates();
                setLoading(false);
            }
        } else {
            toast.warn(t('modalHelpErroreTestoVuoto'));
            resetStates();
        }
    };

    // Componente per renderizzare dinamicamente i messaggi in base al loro stato
    const conditionalBubble = () => {
        if (isLoading) {
            return (<div className="w-full h-[10svh] rounded-xl animate-pulse bg-custom-elevation3 dark:bg-dark-elevation3" />);
        }
        if (messageText) {
            return (
                <>
                    <ChatBubble
                        messageStyle="bg-custom-elevation3 dark:bg-dark-elevation3 items-end"
                        messageSender={t('modalHelpSender')}
                        messageText={messageText} />
                    <ChatBubble
                        messageStyle="bg-custom-elevation2 dark:bg-dark-elevation2"
                        messageSender="Describify"
                        messageText={t('modalHelpMessaggioRisposta')} />
                </>
            );
        }
        return null;
    };

    return (
        <>
            <ModalBase size="lg" modalTitle={t('modalHelpTitolo')} onClose={() => handleCloseModalHelp()}>
                <div className="w-full h-auto min-h-[50svh] max-h-[80svh] overflow-scroll flex flex-col justify-between gap-y-10">
                    {/* Blocco messaggi */}
                    <div className="w-full flex flex-col gap-y-3">
                        {/* Primo messaggio di spiegazione */}
                        <ChatBubble
                            messageStyle="bg-custom-elevation2 dark:bg-dark-elevation2"
                            messageSender="Describify"
                            messageText={t('modalHelpMessaggioInformativo')} />
                        {/* Messaggio scritto dall'utente con relativa risposta del sistema */}
                        {conditionalBubble()}
                    </div>
                    {/* Blocco input */}
                    <div className="w-full h-min flex items-center justify-center gap-x-3">
                        <input
                            type="text"
                            placeholder={t('modalHelpInputPlaceholder')}
                            className="w-full rounded-lg p-3 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                            onChange={e => setText(e.target.value)}
                            value={text} />
                        <button
                            className="flex items-center justify-center gap-x-2 p-2.5 rounded-lg bg-custom-accent hover:bg-custom-hoverColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray"
                            onClick={() => handleSendComment()}>
                            {t('modalHelpBottoneInvia')} <IoIosSend />
                        </button>
                    </div>
                </div>
            </ModalBase>
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={2000} />
        </>
    );
}