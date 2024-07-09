import { Dispatch, SetStateAction, useCallback, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Axios
import axios from 'axios';
//React router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { ContainerInput } from "../components/Layout";
import { IconaLogo, NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

interface SigninFormProps {
    setModalResetPassword: Dispatch<SetStateAction<boolean>>;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    setAlertColor: Dispatch<SetStateAction<string>>;
}

interface SigninFormState {
    email: string;
    password: string;
}

//Url del server
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
const SERVER_URL = 'http://localhost:3000';

export default function SigninForm({ setModalResetPassword, setAlertOpen, setAlertMessage, setAlertColor }: SigninFormProps) {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [signinForm, setSigninForm] = useState<SigninFormState>({
        email: '',
        password: ''
    });

    //Funzione per impostare i valori del form
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setSigninForm(prevState => ({
            ...prevState,
            [fieldName]: event.target.value
        }));
    }, []);

    //Funzione per gestire gli errori nella fase di accesso
    const handleError = useCallback((error: any) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    setAlertMessage('Credenziali errate');
                    break;
                case 404:
                    setAlertMessage('Server non trovato');
                    break;
                default:
                    setAlertMessage('Errore durante la fase di login');
            }
        } else {
            setAlertMessage('Errore di rete o problema imprevisto');
        }
        setAlertColor('failure');
        setAlertOpen(true);
    }, [setAlertMessage, setAlertColor, setAlertOpen]);

    //Funzione per gestire il successo della fase di accesso
    const handleSuccess = useCallback((token: string) => {
        localStorage.setItem('authToken', token);
        setAlertMessage('Accesso effettuato correttamente');
        setAlertColor('success');
        setAlertOpen(true);
        navigate('/product');
    }, [setAlertMessage, setAlertColor, setAlertOpen, navigate]);

    // Funzione per effettuare l'accesso all'account
    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // VALIDAZIONE DAT INSERITI //
        try {
            const response = await axios.post(`${SERVER_URL}/signin`, {
                email: signinForm.email,
                password: signinForm.password,
            });
            if (response.status === 200) {
                handleSuccess(response.data.token);
            }
        } catch (error: any) {
            console.error('Errore durante la fase di login', error);
            handleError(error);
        }
    }

    return (
        <form
            onSubmit={handleSignin}
            className="w-full md:w-1/2 h-auto min-h-[90svh] flex flex-col gap-5 items-center justify-center px-6 md:px-32">
            {/* Intestazione */}
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3 mb-5">
                <div className="w-full flex items-center justify-center gap-x-2">
                    <IconaLogo width="30" height="30" />
                    <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
                </div>
                <h1 className="text-5xl text-center font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinWelcome')}</h1>
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
                    onChange={event => handleChange(event, 'email')} />
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
                        onChange={event => handleChange(event, 'password')} />
                    <button
                        type="button"
                        onClick={() => setPasswordVisible(!isPasswordVisible)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        {isPasswordVisible ? <VisibilityIcon /> : <NonVisibilityIcon />}
                    </button>
                </div>
            </ContainerInput>
            {/* Link recupera password */}
            <ContainerInput containerStyle="flex-row">
                <p
                    className="text-sm font-light cursor-pointer text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-textSecondaryColor dark:hover:text-dark-textSecondaryColor"
                    onClick={() => setModalResetPassword(true)}>
                    {t('signinLostPassword')}
                </p>
            </ContainerInput>
            {/* Bottone accedi */}
            <ContainerInput containerStyle="flex-col">
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                    {t('signinButton')}
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
    );
}
