import { useState } from "react";
//React router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Axios
import axios from 'axios';
//Components
import { ContainerInput } from "../components/Layout";

//Url del server
const SERVER_URL = 'http://localhost:3000';

interface EmailUpdateProps {
    accessToken: string;
}

export default function EmailUpdate({ accessToken }: EmailUpdateProps) {

    const navigate: NavigateFunction = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [errorLabel, setErrorLabel] = useState("");

    // Funzione per validare i dati inseriti dall'utente
    const handleValidate = () => {
        let valid = true;
        if (newPassword.length < 6) {
            setErrorLabel('La password deve contenere almento 6 caratteri');
            valid = false;
        } else if (newPassword !== confirmNewPassword) {
            setErrorLabel('Le due password non coincidono');
            valid = false;
        }
        return valid;
    }

    // Funzione per fare la chiamata al server per aggiornare la password dell'utente
    const handleResetPassword = async () => {
        console.log('CLIENT: UPDATE USER');
        const valid = handleValidate();
        console.log('Password valida:', valid);

        if (valid) {
            try {
                console.log('CLIENT: Invio richiesta al server', {
                    newPassword: newPassword,
                    accessToken: accessToken
                });
                const response = await axios.post(`${SERVER_URL}/update-user`, {
                    newPassword: newPassword,
                    accessToken: accessToken
                });
                console.log('CLIENT: Stato della risposta:', response.status);
                if (response.status === 200) {
                    alert('Profilo aggiornato correttamente');
                    navigate('/');
                }
            } catch (error) {
                console.error('CLIENT: Errore durante la fase di aggiornamento della password', error);
                alert('Errore aggiornamento password');
            }
        }
    }

    return (
        <div className="w-full h-auto flex flex-wrap gap-y-6 gap-x-1">
            {/* Intestazione */}
            <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Reset password</p>
            <p className="text-lg font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Reimposta la password del tuo account</p>
            {/* Input password */}
            <ContainerInput containerStyle="flex-col">
                <label htmlFor="input-signup-password" className="block mb-2 text-sm font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Reset password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-password"
                    name="input-signup-password"
                    className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    onFocus={() => setErrorLabel('')}
                    onChange={(event) => setNewPassword(event.target.value)} />
                {errorLabel !== "" && <p className="text-red-500 font-light text-sm">{errorLabel}</p>}
            </ContainerInput>
            {/* Input conferma password */}
            <ContainerInput containerStyle="flex-col">
                <label htmlFor="input-signup-repet-password" className="block mb-2 text-sm font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Confirm password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-repet-password"
                    name="input-signup-repet-password"
                    className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    onChange={(event) => setConfirmNewPassword(event.target.value)} />
            </ContainerInput>
            {/* Bottone di "Reset Password" */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor"
                onClick={() => handleResetPassword()}>
                Reset password
            </button>
        </div>
    );
}