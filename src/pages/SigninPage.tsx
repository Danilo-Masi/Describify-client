import { Dispatch, SetStateAction, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//React router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Components
import AccessBox from "../components/AccessBox";
import { Layout } from "../components/Layout";
import { ContainerInput } from "../components/Layout";
import ModalResetPassword from "../components/ModalResetPassword.tsx";

interface SigninFormProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function SigninForm({ setModalOpen }: SigninFormProps) {

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
    /*const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
    };*/

    const handleSignin = () => {
        console.log('Signin ciao');
    }

    return (
        <form
            onSubmit={handleSignin}
            className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32">
            <ContainerInput containerStyle="w-full flex flex-col">
                <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinWelcome')}</h1>
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <label htmlFor="email" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinEmailLabel')}</label>
                <input
                    autoComplete="email"
                    type="email"
                    id="email"
                    className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    placeholder="name@decribify.com"
                    required
                    value={signinForm.email}
                    onChange={event => handleChange(event, 'email')} />
            </ContainerInput>
            <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
                <label htmlFor="password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signinPasswordLabel')}</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="password"
                    className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    value={signinForm.password}
                    onChange={event => handleChange(event, 'password')} />
            </ContainerInput>
            <ContainerInput containerStyle="flex-row">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border rounded focus:ring-1 border-custom-border bg-custom-background focus:ring-custom-accent checked:bg-custom-accent dark:border-dark-border dark:bg-dark-background dark:ring-dark-accent dark:checked:bg-dark-accent"
                        checked={rememberCheckbox}
                        onChange={() => setRememberCheckbox(!rememberCheckbox)} />
                    <label htmlFor="remember" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray ms-2">{t('signinCheckboxLabel')}</label>
                </div>
                <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray" onClick={() => setModalOpen(true)}>Lost password?</p>
            </ContainerInput>
            <ContainerInput containerStyle="flex-col">
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                    {t('signinButton')}
                </button>
            </ContainerInput>
            <ContainerInput containerStyle="flex-row">
                <p className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {t('signinRedirectLabel')}
                    <Link to="/signup" className="text-custom-textPrimaryColor dark:text-dark-textPrimaryColor hover:text-dark-textSecondaryColor dark:hover:text-custom-textSecondaryColor ms-2">
                        {t('signinRedirectLink')}
                    </Link>
                </p>
            </ContainerInput>
        </form>
    );
}

interface SigninPageProps {
    modalOpen?: boolean;
}

export default function SigninPage({ modalOpen }: SigninPageProps) {

    // Verificare che l'utente non sia già loggato //

    const [isModalResetPassOpen, setIsModalResetPassOpen] = useState(modalOpen ? modalOpen : false);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm setModalOpen={setIsModalResetPassOpen} />
            <AccessBox />
            {isModalResetPassOpen && <ModalResetPassword onClose={() => setIsModalResetPassOpen(false)} />}
        </Layout>
    )
}
