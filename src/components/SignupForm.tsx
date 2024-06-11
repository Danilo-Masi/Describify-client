import { Dispatch, SetStateAction, useState } from "react";
//Axios
import axios from 'axios';
//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { ContainerInput } from "../components/Layout";
import { IconaLogo, NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

interface SignupFormProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setEmailPut: Dispatch<SetStateAction<string>>
}

export default function SignupForm({ setModalOpen, setEmailPut }: SignupFormProps) {

  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
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

  // Funzione per registrare un nuovo account
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // VALIDAZIONE DATI INSERITI //
    try {
      const response = await axios.post(`http://localhost:3000/signup`, {
        email: signupForm.email,
        password: signupForm.password,
      });
      if (response.status === 200) {
        alert('Utente registrato correttamente');
        navigate('/product');
      } else {
        alert('Credenziali errate');
        return;
      }
    } catch (error: any) {
      console.error("Unexpected Server Error", error.response.status);
      console.error(error.message);
    }
  }

  return (
    <form
      onSubmit={handleSignup}
      className="w-full md:w-1/2 h-auto min-h-svh flex flex-col gap-5 items-center justify-center px-6 md:px-32">
      {/* Intestazione */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3 mb-5">
        <div className="w-full flex items-center justify-center gap-x-2">
          <IconaLogo width="30" height="30" />
          <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
        </div>
        <h1 className="text-5xl text-center font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupWelcome')}</h1>
      </ContainerInput>
      {/* Campo email */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <label htmlFor="input-signup-email" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupEmailLabel')}</label>
        <input
          type="email"
          id="input-signup-email"
          name="input-signup-email"
          className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
          placeholder="name@describify.com"
          value={signupForm.email}
          onChange={event => handleChange(event, 'email')} />
      </ContainerInput>
      {/* Campo password */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <label htmlFor="input-signup-password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupPasswordLabel')}</label>
        <div className="w-full relative">
          <input
            placeholder="•••••••••"
            type={isPasswordVisible ? "text" : "password"}
            id="input-signup-password"
            name="input-signup-password"
            className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
            value={signupForm.password}
            onChange={event => handleChange(event, 'password')} />
          <button
            type="button"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            {isPasswordVisible ? <VisibilityIcon /> : <NonVisibilityIcon />}
          </button>
        </div>
      </ContainerInput>
      {/* Campo conferma password */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <label htmlFor="input-signup-repet-password" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupConfirmPasswordLabel')}</label>
        <div className="w-full relative">
          <input
            placeholder="•••••••••"
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="input-signup-repet-password"
            name="input-signup-repet-password"
            className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
            value={signupForm.confirmPassword}
            onChange={event => handleChange(event, 'confirmPassword')} />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            {isConfirmPasswordVisible ? <VisibilityIcon /> : <NonVisibilityIcon />}
          </button>
        </div>
      </ContainerInput>
      {/* Campo accetta termini e condizioni */}
      <ContainerInput containerStyle="flex-row">
        <div className="flex items-center justify-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            name="checkbox"
            className="w-4 h-4 border rounded focus:ring-1 border-custom-border bg-custom-background focus:ring-custom-accent checked:bg-custom-accent dark:border-dark-border dark:bg-dark-background dark:ring-dark-accent dark:checked:bg-dark-accent"
            checked={termsCheckbox}
            onChange={() => setTermsCheckbox(!termsCheckbox)} />
          <label htmlFor="terms" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray ms-2">
            {t('signupCheckboxLabel')}
            <Link to="/terms-and-conditions" className="text-custom-textSecondaryColor dark:text-dark-textSecondaryColor hover:text-custom-solidColor dark:hover:text-dark-solidColor">
              {t('singupCheckboxLink')}
            </Link>
          </label>
        </div>
      </ContainerInput>
      {/* Bottone registrati */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
          {t('signupButton')}
        </button>
      </ContainerInput>
      {/* Link redirect */}
      <ContainerInput containerStyle="flex-row">
        <p className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
          {t('signupRedirectLabel')}
          <Link to="/signin" className="text-custom-textSecondaryColor dark:text-dark-textSecondaryColor hover:text-custom-solidColor dark:hover:text-dark-solidColor ms-2">
            {t('signupRedirectLink')}
          </Link>
        </p>
      </ContainerInput>
    </form>
  );
}
