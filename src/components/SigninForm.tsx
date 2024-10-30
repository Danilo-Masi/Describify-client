// React
import { useCallback, useState } from "react";
// React router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// React-icon
import { RiSparkling2Line } from "react-icons/ri";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Utilities
import { useEmail } from "../utilities/useEmail.tsx";
// Assets
import logo from '../assets/images/logo.svg';
// Components
import { ContainerInput } from "../components/Layout";
import { NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del server di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface SigninFormState {
    email: string;
    password: string;
}

export default function SigninForm() {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Componente per la navigazione dei link
    const navigate: NavigateFunction = useNavigate();

    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const [errorLabel, setErrorLabel] = useState({ emailError: '', passwordError: '' });
    const [signinForm, setSigninForm] = useState<SigninFormState>({ email: '', password: '' });

    // Funzione per impostare i valori del form
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setSigninForm(prevState => ({
            ...prevState,
            [fieldName]: event.target.value
        }));
    }, []);

    // Fnzione per validare l'email inserita dall'utente
    const validateEmail = (email: string) => {
        if (email === "" || !useEmail(email)) {
            return t('signinErroreEmail');
        }
        return '';
    }

    // Funzione per validare la password inserita dall'utente
    const validatePassword = (password: string) => {
        if (password === "") {
            return t('signinErrorePassword');
        } else if (password.length < 6) {
            return t('signinErrorePasswordLunghezza');
        }
        return '';
    };

    // Funzione per validare i dati inseriti dall'utente nel form
    const handleValidate = useCallback(() => {
        const errors = {
            emailError: validateEmail(signinForm.email),
            passwordError: validatePassword(signinForm.password),
        }
        setErrorLabel(errors);
        return !Object.values(errors).some(error => error !== '');
    }, [signinForm.email, signinForm.password]);

    // Funzione per resettare il valore della ErrorLabel
    const handleResetLabel = (fieldName: string) => {
        setErrorLabel(prevState => ({
            ...prevState,
            [fieldName]: '',
        }));
    }

    // Funzione per gestire gli errori nella fase di accesso
    const handleError = useCallback((error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.error(t('signinErroreCredenziali'));
                    break;
                case 404:
                    toast.error(t('signinErroreServer'));
                    break;
                default:
                    toast.error(t('signinErroreGenerico'));
            }
        } else {
            toast.error(t('signinErroreRete'));
        }
    }, [navigate]);

    // Funzione per gestire il successo della fase di accesso
    const handleSuccess = useCallback((token: string) => {
        localStorage.setItem('authToken', token);
        toast.success(t('signinVerificato'), {
            onClose: () => navigate('/product'),
        });
    }, [navigate]);

    // Funzione per effettuare l'accesso all'account
    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validazioneDati = handleValidate();
        if (validazioneDati) {
            try {
                const response = await axios.post(`${SERVER_URL}/signin`, {
                    email: signinForm.email,
                    password: signinForm.password,
                });
                if (response.status === 200) {
                    handleSuccess(response.data.token);
                }
            } catch (error: any) {
                console.error('Errore durante la fase di login', error.message);
                handleError(error);
            }
        }
    }

    return (
        <>
            <form
                onSubmit={handleSignin}
                className="w-full md:w-1/2 h-auto min-h-[90svh] flex flex-col gap-5 items-center justify-center px-6 md:px-32">
                {/* Intestazione */}
                <ContainerInput containerStyle="w-full flex flex-col items-center gap-y-3 mb-5">
                    <h1 className="text-center text-2xl md:text-3xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        {t('signinMessaggioBenvenuto')}
                    </h1>
                </ContainerInput>
                {/* Campo email */}
                <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                    <label htmlFor="email" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinEmailLabel')}</label>
                    <input
                        autoComplete="email"
                        type="email"
                        id="email"
                        className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                        placeholder="name@decribify.com"
                        value={signinForm.email}
                        onFocus={() => handleResetLabel('emailError')}
                        onChange={event => handleChange(event, 'email')} />
                    {errorLabel.emailError !== "" && <p className="text-red-500 font-light text-sm">{errorLabel.emailError}</p>}
                </ContainerInput>
                {/* Campo password */}
                <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                    <label htmlFor="password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinPasswordLabel')}</label>
                    <div className="w-full relative">
                        <input
                            placeholder="•••••••••"
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                            value={signinForm.password}
                            onFocus={() => handleResetLabel('passwordError')}
                            onChange={event => handleChange(event, 'password')} />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!isPasswordVisible)}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                            {isPasswordVisible ? <VisibilityIcon /> : <NonVisibilityIcon />}
                        </button>
                    </div>
                    {errorLabel.passwordError !== "" && <p className="text-red-500 font-light text-sm">{errorLabel.passwordError}</p>}
                </ContainerInput>
                {/* Bottone accedi */}
                <ContainerInput containerStyle="flex-col">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                        {t('signinBottone')}
                    </button>
                </ContainerInput>
                {/* Link redirect */}
                <ContainerInput containerStyle="flex-row">
                    <p className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        {t('signinRedirectLabel')}
                        <Link to="/signup" className="text-custom-textSecondaryColor dark:text-dark-textSecondaryColor hover:text-custom-solidColor dark:hover:text-dark-solidColor ms-2">
                            {t('signinRedirectLink')}
                        </Link>
                    </p>
                </ContainerInput>
            </form>
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={1000} />
        </>
    );
}
