// React
import { Dispatch, SetStateAction, useState } from "react";
// React-DOM
import { renderToString } from 'react-dom/server';
// React-email
import { render } from '@react-email/render';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Components
import ModalBase from "./ModalBase";
import { SendIcon } from "./SvgComponents";
import MyTemplate from "./MyTemplate";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ModalHelpProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalHelp({ setPageSelected }: ModalHelpProps) {

    const { t } = useTranslation();
    const [comment, setComment] = useState('');

    // Porta il template dell'email in React in Html
    const html = render(<MyTemplate />, {
        pretty: true,
    });

    // Trasfroma l'html in string
    const htmlString = renderToString(<MyTemplate />);

    // Funzione che richiama il backend per l'invio dell'email
    const handleSendComment = async () => {
        try {
            // Invio dell'email con il commento e l'HTML
            const response = await axios.post(`${SERVER_URL}/send-template`, {
                email: htmlString,
            });
            // Verifica se la richiesta è stata eseguita con successo
            if (response.status === 200) {
                alert('Commento inviato con successo...'); //IMPLEMENTARE UN ALERT
            } else {
                // Se la richiesta non ha avuto successo, registra un errore
                console.error("Errore nell'invio dell'email: risposta inattesa dal server");
            }
        } catch (error: any) {
            // Gestione degli errori di rete o di server
            if (error.response) {
                console.error("Errore nell'invio dell'email: risposta dal server con codice di stato", error.response.status);
            } else if (error.request) {
                console.error("Errore nell'invio dell'email: nessuna risposta dal server");
            } else {
                console.error("Errore nell'invio dell'email:", error.message);
            }
        }
    };

    return (
        <ModalBase size="md" modalTitle={t('modalHelpTitle')} onClose={() => setPageSelected("Genera")}>
            {/* Intestazione */}
            <div className="w-full h-auto flex flex-col rounded-lg bg-custom-elevation4 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray">
                <div className="w-full p-3 rounded-t-lg border-b border-custom-borderGray dark:border-dark-borderGray">
                    <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance">
                        Segnalaci il quesito d'errore che hai riscontrato, cerca di essere breve e conciso in modo da darci la possibilità di risponderti e risolvere il problema in tempi brevi. Grazie!!
                    </p>
                </div>
                {/* Textarea */}
                <textarea
                    className="w-full min-h-52 overflow-scroll resize-none border-none focus:ring-0 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray bg-custom-elevation4 dark:bg-dark-elevation3 "
                    placeholder="Leave your comment here..."
                    value={comment}
                    onChange={event => setComment(event.target.value)} />
                {/* Bottone per l'invio */}
                <div className="w-full flex items-center justify-end p-3 rounded-b-lg bg-custom-elevation2 dark:bg-dark-elevation2 ">
                    <button
                        type="button"
                        className="w-fit flex gap-x-2 p-2.5 rounded-lg  bg-custom-accent dark:bg-dark-accent text-dark-textPrimaryColor"
                        onClick={() => handleSendComment()}>
                        Send
                        <SendIcon />
                    </button>
                </div>
            </div>
        </ModalBase>
    );
}
