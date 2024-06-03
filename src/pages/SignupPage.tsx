import { Dispatch, SetStateAction, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { Link } from "react-router-dom";
//Components
import AccessBox from "../components/AccessBox";
import { Layout } from "../components/Layout";
import { ContainerInput } from "../components/Layout";
import ModalConfirmAccount from "../components/ModalConfirmAccount.tsx";

interface SignupFormProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    setEmailPut: Dispatch<SetStateAction<string>>
}

function SignupForm({ setModalOpen, setEmailPut }: SignupFormProps) {

    const { t } = useTranslation();

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
    /*const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                // Apri modal di conferma email
                setEmailPut(signupForm.email);
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert('Error during signup');
        }
    };*/

    const handleSignup = () => {
        console.log('Signup ciao');
    }

    return (
        <form
            onSubmit={handleSignup}
            className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32">
            <ContainerInput containerStyle="flex-col">
                <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupWelcome')}</h1>
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <label htmlFor="input-signup-email" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupEmailLabel')}</label>
                <input
                    type="email"
                    id="input-signup-email"
                    name="input-signup-email"
                    className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    placeholder="name@describify.com"
                    required
                    value={signupForm.email}
                    onChange={event => handleChange(event, 'email')} />
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <label htmlFor="input-signup-password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-password"
                    name="input-signup-password"
                    className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    value={signupForm.password}
                    onChange={event => handleChange(event, 'password')} />
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <label htmlFor="input-signup-repet-password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupConfirmPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-repet-password"
                    name="input-signup-repet-password"
                    className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    value={signupForm.confirmPassword}
                    onChange={event => handleChange(event, 'confirmPassword')} />
            </ContainerInput>
            <ContainerInput containerStyle="flex-row">
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
                    <label htmlFor="terms" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray ms-2">
                        {t('signupCheckboxLabel')}
                        <a href="#" className="text-custom-accent dark:text-dark-accent font-medium">
                            {t('singupCheckboxLink')}
                        </a>
                    </label>
                </div>
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">{t('signupButton')}</button>
            </ContainerInput>
            <ContainerInput containerStyle="flex-row">
                <p className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('signupRedirectLabel')}
                    <Link to="/signin" className="text-custom-textPrimaryColor dark:text-dark-textPrimaryColor hover:text-dark-textSecondaryColor dark:hover:text-custom-textSecondaryColor ms-2">
                        {t('signupRedirectLink')}
                    </Link>
                </p>
            </ContainerInput>
        </form>
    );
}

export default function SignupPage() {

    // Verificare che l'utente non sia già loggato //

    const [emailPut, setEmailPut] = useState("");
    const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm setModalOpen={setIsModalEmailOpen} setEmailPut={setEmailPut} />
            <AccessBox />
            {isModalEmailOpen && <ModalConfirmAccount emailUser={emailPut} />}
        </Layout>
    );
}
