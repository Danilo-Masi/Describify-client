import { useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//React router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Supabase
import { supabase } from '../services/client.tsx';
//Components
import AccessBox from "../components/AccessBox";
import Layout from "../components/Layout";
import { ContainerInput } from "../components/Layout";

function SigninForm() {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [rememberCheckbox, setRememberCheckbox] = useState(false);
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });

    //Imposta lo stato dei vari input presenti nel form
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setSigninForm(prevState => ({
            ...prevState,
            [fieldName]: event.target.value
        }))
    }

    //Funzione per effettuare l'accesso all'account 
    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validazione dei dati /***** DA IMPLEMENTARE ******/
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: signinForm.email,
                password: signinForm.password,
            });
            if (error) {
                alert('Credenziali errate');
                console.error("Errore nelle credenziali:", error);
            } else {
                alert('Accesso effettuato correttamente');
                navigate('/'); // Naviga verso la homepage o la dashboard
            }
        } catch (error) {
            console.error("Error during signin:", error);
        }
    };

    return (
        <form
            onSubmit={handleSignin}
            className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32">
            <ContainerInput flexOrentation="flex-col">
                <h1 className="text-2xl font-bold text-custom-textPrimary dark:text-dark-textPrimary">{t('signinWelcome')}</h1>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signinEmailLabel')}</label>
                <input
                    autoComplete="email"
                    type="email"
                    id="email"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    placeholder="name@decribify.com"
                    required
                    value={signinForm.email}
                    onChange={event => handleChange(event, 'email')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signinPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="password"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    required
                    value={signinForm.password}
                    onChange={event => handleChange(event, 'password')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-row">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border rounded focus:ring-1 border-custom-border bg-custom-background focus:ring-custom-accent checked:bg-custom-accent dark:border-dark-border dark:bg-dark-background dark:ring-dark-accent dark:checked:bg-dark-accent"
                        checked={rememberCheckbox}
                        onChange={() => setRememberCheckbox(!rememberCheckbox)} />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signinCheckboxLabel')}</label>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <button type="submit" className="focus:ring-1 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-dark-textPrimary bg-custom-accent focus:ring-custom-accent dark:text-dark-textPrimary dark:bg-dark-accent dark:focus:ring-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent">
                    {t('signinButton')}
                </button>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-row">
                <p className="text-sm font-light text-custom-textSecondary dark:text-dark-textSecondary">
                    {t('signinRedirectLabel')} <Link to="/signup" className="text-custom-accent dark:text-dark-accent hover:text-dark-accent dark:hover:text-custom-accent">{t('signinRedirectLink')}</Link>
                </p>

            </ContainerInput>
        </form>
    );
}

export default function SigninPage() {
    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm />
            <AccessBox />
        </Layout>
    )
}
