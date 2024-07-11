import { Dispatch, SetStateAction, useCallback, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Axios
import axios from 'axios';
//Utilities
import { useEmail } from "../utilities/useEmail";

interface EmailResendProps {
    setResetEmailSend: Dispatch<SetStateAction<boolean>>;
}

//Url del server
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
const SERVER_URL = 'http://localhost:3000';

export default function EmailResend({ setResetEmailSend }: EmailResendProps) {

    const { t } = useTranslation();

    const [emailDigit, setEmailDigit] = useState("");
    const [disableButton, setDisabledButton] = useState(false);
    const [errorLabel, setErrorLabel] = useState("");

    // Funzione per validare l'email inserita dall'utente
    const handleValidate = useCallback(() => {
        let valid = true;
        if (emailDigit === "" || !useEmail(emailDigit)) {
            setErrorLabel('Inserire un email valida prima di procedere');
            valid = false;
        } else {
            setErrorLabel('');
        }
        return valid;
    }, [emailDigit]);

    // Funzione per inviare un email per reimpostare l'account dell'utente
    const handleResend = async () => {
        const validazioneDati = handleValidate();
        if (validazioneDati) {
            try {
                const response = await axios.post(`${SERVER_URL}/reset-password`, {
                    email: emailDigit,
                });
                if (response.status === 200) {
                    setResetEmailSend(true);
                    setDisabledButton(true);
                }
            } catch (error) {
                console.error('Errore durante la fase di reset password', error);
            }
        }
    }

    return (
        <div className="flex flex-col gap-y-5 gap-x-3">
            {/* Intestazione */}
            <div className="flex flex-col gap-y-2">
                <p className="text-4xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Reset password</p>
                <p className="text-md  text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{t('modalResetPasswordCaption')}</p>
            </div>
            {/* Email input */}
            <input
                autoComplete="email"
                type="email"
                id="email"
                className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                placeholder="name@decribify.com"
                value={emailDigit}
                onFocus={() => setErrorLabel('')}
                onChange={(event) => setEmailDigit(event.target.value)} />
            {errorLabel !== "" && <p className="text-red-500 font-light text-sm">{errorLabel}</p>}
            {/* Bottone */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor"
                disabled={disableButton}
                onClick={() => handleResend()}>
                {t('modalResetPasswordButton')}
            </button>
        </div>
    );
}