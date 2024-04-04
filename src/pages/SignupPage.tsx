import { useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Supabase
import { supabase } from '../services/client.tsx';
//Components
import AccessBox from "../components/AccessBox";
import Layout from "../components/Layout";
import { ContainerInput } from "../components/Layout";

function SignupForm() {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [termsCheckbox, setTermsCheckbox] = useState(false);
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    //Imposta lo stato dei vari input presenti nel form
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setSignupForm(prevState => ({
            ...prevState,
            [fieldName]: event.target.value
        }))
    }

    //Funzione per effettuare la registrazione di un nuovo utente
    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validazione dei dati /***** DA IMPLEMENTARE ******/
        try {
            const { error } = await supabase.auth.signUp({
                email: signupForm.email,
                password: signupForm.password,
            });
            if (error) {
                console.error("Error during signup:", error);
                alert('Error during signup: ' + error.message);
            } else {
                alert('Check your email to confirm the account');
                // Naviga verso la pagina di conferma email o un messaggio appropriato
                navigate('/confirmEmail');
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert('Error during signup');
        }
    };

    return (
        <form
            onSubmit={handleSignup}
            className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32">
            <ContainerInput flexOrentation="flex-col">
                <h1 className="text-2xl font-bold text-custom-textPrimary dark:text-dark-textPrimary">{t('signupWelcome')}</h1>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="input-signup-email" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signupEmailLabel')}</label>
                <input
                    type="email"
                    id="input-signup-email"
                    name="input-signup-email"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    placeholder="name@describify.com"
                    required
                    value={signupForm.email}
                    onChange={event => handleChange(event, 'email')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="input-signup-password" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signupPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-password"
                    name="input-signup-password"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    required
                    value={signupForm.password}
                    onChange={event => handleChange(event, 'password')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="input-signup-repet-password" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signupConfirmPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-repet-password"
                    name="input-signup-repet-password"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    required
                    value={signupForm.confirmPassword}
                    onChange={event => handleChange(event, 'confirmPassword')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-row">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        value=""
                        name="checkbox"
                        className="w-4 h-4 border rounded focus:ring-1 border-custom-border bg-custom-background focus:ring-custom-accent checked:bg-custom-accent dark:border-dark-border dark:bg-dark-background dark:ring-dark-accent dark:checked:bg-dark-accent"
                        required
                        checked={termsCheckbox}
                        onChange={() => setTermsCheckbox(!termsCheckbox)} />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">{t('signupCheckboxLabel')} <a href="#" className="text-custom-accent dark:text-dark-accent font-medium">{t('singupCheckboxLink')}</a></label>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <button type="submit" className="w-full md:w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{t('signupButton')}</button>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-row">
                <p className="text-sm font-light text-custom-textSecondary dark:text-dark-textSecondary">
                    {t('signupRedirectLabel')} <Link to="/signin" className="text-custom-accent dark:text-dark-accent font-medium">{t('signupRedirectLink')}</Link>
                </p>
            </ContainerInput>
        </form>
    );
}

export default function SignupPage() {
    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm />
            <AccessBox />
        </Layout>
    );
}
