// React
import { Dispatch, SetStateAction, useState } from "react";
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
import { SendIcon } from "./SvgComponents";
import EmailHelp from "./EmailHelp";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ModalHelpProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalHelp({ setPageSelected }: ModalHelpProps) {

    const { t } = useTranslation();
    const [userText, setUserText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const htmlString = renderToString(<EmailHelp userText={userText} />);

    const handleSendComment = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${SERVER_URL}/send-template`, {
                email: htmlString,
            });
            if (response.status === 200) {
                toast.success('Commento inviato correttamente');
            } else {
                toast.error('Si è verificato un errore durante l’invio del commento.');
            }
        } catch (error: any) {
            toast.error('Errore di rete: impossibile inviare il commento.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ModalBase size="md" modalTitle={t('modalHelpTitle')} onClose={() => setPageSelected("Genera")}>
                <div className="w-full h-auto flex flex-col rounded-lg bg-custom-elevation4 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray">
                    <div className="w-full p-3 rounded-t-lg border-b border-custom-borderGray dark:border-dark-borderGray">
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray text-balance">
                            Segnalaci il quesito d'errore che hai riscontrato, cerca di essere breve e conciso in modo da darci la possibilità di risponderti e risolvere il problema in tempi brevi. Grazie!!
                        </p>
                    </div>
                    <textarea
                        className="w-full min-h-52 overflow-scroll resize-none border-none focus:ring-0 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray bg-custom-elevation4 dark:bg-dark-elevation3"
                        placeholder="Leave your comment here..."
                        value={userText}
                        onChange={event => setUserText(event.target.value)} />
                    <div className="w-full flex items-center justify-end p-3 rounded-b-lg bg-custom-elevation2 dark:bg-dark-elevation2">
                        <button
                            type="button"
                            className="w-fit flex gap-x-2 p-2.5 rounded-lg bg-custom-accent dark:bg-dark-accent text-dark-textPrimaryColor"
                            onClick={handleSendComment}
                            disabled={loading}>
                            {loading ? 'Sending...' : 'Send'}
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </ModalBase>
            <ToastContainer />
        </>
    );
}