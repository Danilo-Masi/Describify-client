import { Dispatch, SetStateAction, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//React router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { ContainerInput } from "../components/Layout";
import { IconaLogo, NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

interface SigninFormProps {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SigninForm({ setModalOpen }: SigninFormProps) {

    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const [isPasswordVisible, setPasswordVisible] = useState(false);
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

    const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Signin ciao');
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
                    className="text-sm font-light cursor-pointer text-custom-textSecondaryGray dark:text-dark-textSecondaryGray"
                    onClick={() => setModalOpen(true)}>
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
                    <Link to="/signup" className="text-custom-textPrimaryColor dark:text-dark-textPrimaryColor hover:text-dark-textSecondaryColor dark:hover:text-custom-textSecondaryColor ms-2">
                        {t('signinRedirectLink')}
                    </Link>
                </p>
            </ContainerInput>
        </form>
    );
}
