import { Dispatch, SetStateAction, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';

interface EmailResendProps {
    onClose: () => void;
    setEmailUsed: Dispatch<SetStateAction<string>>;
}

export default function EmailResend({ onClose, setEmailUsed }: EmailResendProps) {

    const { t } = useTranslation();

    const [emailDigit, setEmailDigit] = useState("");
    const [disableButton, setDisabledButton] = useState(false);

    /*const handleResend = async () => {
        console.log('Resend email to... ' + emailDigit);
        try {
            let { data, error } = await supabase.auth.resetPasswordForEmail(emailDigit);
            console.log(data);
            setEmailUsed(emailDigit);
            setDisabledButton(true);
        } catch (error) {
            console.log(error);
        }
    }*/

    const handleResend = () => {
        console.log('Resend ciao');
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
                required
                type="email"
                id="input-email-reset"
                className="w-full rounded-lg p-2.5 text-sm bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                placeholder="name@describify.com"
                onChange={(event) => setEmailDigit(event.target.value)} />
            {/* Bottoni */}
            <button
                disabled={disableButton}
                onClick={handleResend}
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg p-2.5 font-medium text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                {t('modalResetPasswordButton')}
            </button>
            <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-sm font-light">
                Ora ricordi la password?
                <span
                    className="hover:text-custom-textPrimaryGray dark:hover:text-dark-textPrimaryGray cursor-pointer ml-2"
                    onClick={onClose}>
                    Chiudi
                </span>
            </p>
        </div>
    );
}