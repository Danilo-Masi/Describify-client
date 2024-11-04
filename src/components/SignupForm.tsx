// React
import { useCallback, useState } from "react";
// React-router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
// React-tostify
import { toast } from 'react-toastify';
// Axios
import axios from 'axios';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useEmail } from "../utilities/useEmail.tsx";
// Components
import { ContainerInput } from "../components/Layout";
import { NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface SignupFormState {
  name: string;
  email: string;
  password: string;
  termsCheckbox: boolean;
}

export default function SignupForm() {

  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errorLabel, setErrorLabel] = useState({ nameError: '', emailError: '', passwordError: '', checkboxError: '' });
  const [signupForm, setSignupForm] = useState<SignupFormState>({ name: '', email: '', password: '', termsCheckbox: false, });

  // Funzione per impostare i valori del form
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSignupForm(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  }, []);

  // Funzione per validare il nome inserito dall'utente
  const validateName = (name: string) => {
    if (name === "") {
      return t('signupErroreNome');
    }
    return '';
  }

  // Funzione per validare l'email inserita dall'utente
  const validateEmail = (email: string) => {
    if (email === "" || !useEmail(email)) {
      return t('signupErroreEmail');
    }
    return '';
  }

  // Funzione per validare la password inserita dall'utente
  const validatePassword = (password: string) => {
    if (password === "") {
      return t('signupErrorePassword');
    } else if (password.length < 6) {
      return t('signupErrorePasswordLunghezza');
    }
    return '';
  };

  // Funzione per validare se la checkbox è stata cliccata
  const validateCheckbox = (isChecked: boolean) => {
    if (!isChecked) {
      return t('signupErroreCheckbox');
    }
    return '';
  };

  // Funzione per validare i dati inseriti dall'utente nel form
  const handleValidate = useCallback(() => {
    const errors = {
      nameError: validateName(signupForm.name),
      emailError: validateEmail(signupForm.email),
      passwordError: validatePassword(signupForm.password),
      checkboxError: validateCheckbox(signupForm.termsCheckbox),
    }
    setErrorLabel(errors);
    return !Object.values(errors).some(error => error !== '');
  }, [signupForm.name, signupForm.email, signupForm.password, signupForm.termsCheckbox]);

  // Funzione per resettare il valore della ErrorLabel
  const handleResetLabel = (fieldName: string) => {
    setErrorLabel(prevState => ({
      ...prevState,
      [fieldName]: '',
    }));
  }

  // Funzione per gestire gli errori nella fase di registrazione
  const handleError = useCallback((error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          toast.error(t('signupErroreCredenziali'));
          break;
        case 404:
          toast.error(t('signupErroreServer'));
          break;
        default:
          toast.error(t('signupErroreGenerico'));
      }
    } else {
      toast.error(t('signupErroreRete'));
    }
  }, [navigate]);

  // Funzione per gestire il successo della fase di registrazione
  const handleSuccess = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
    toast.success(t('signupVerificato'), {
      onClose: () => navigate('/product'), //MODIFICARE IL NAVIGATE ALLA PAGINA PRODUCT CON IL REINDEREZZAMENTO ALLA SEZIONE ACQUISTA CREDITI
    });
  }, [navigate]);

  // Funzione per registrare un nuovo account
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validazioneDati = handleValidate();
    if (validazioneDati) {
      try {
        const response = await axios.post(`${SERVER_URL}/signup`, {
          name: signupForm.name,
          email: signupForm.email,
          password: signupForm.password,
        });
        if (response.status === 200) {
          handleSuccess(response.data.token);
        }
      } catch (error: any) {
        console.error('Errore durante la fase di signup', error.message);
        handleError(error);
      }
    }
  }

  return (
    <form
      onSubmit={handleSignup}
      className="w-full md:w-1/2 h-auto min-h-svh flex flex-col gap-4 items-center justify-center px-6 md:px-32 py-6 md:py-0">
      {/* Intestazione */}
      <ContainerInput containerStyle="w-full flex flex-col items-center gap-y-3 mb-5">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
          {t('signupMessaggioBenvenuto')}
        </h1>
      </ContainerInput>
      {/* Campo nome */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <label htmlFor="input-signup-name" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupNameLabel')}</label>
        <input
          type="text"
          id="input-signup-name"
          name="input-signup-name"
          className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
          placeholder="dmasiii"
          value={signupForm.name}
          onFocus={() => handleResetLabel('nameError')}
          onChange={event => handleChange(event, 'name')} />
        {errorLabel.nameError !== "" && <p className="text-red-500 font-light text-sm">{errorLabel.nameError}</p>}
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
          onFocus={() => handleResetLabel('emailError')}
          onChange={event => handleChange(event, 'email')} />
        {errorLabel.emailError !== "" && <p className="text-red-500 font-light text-sm">{errorLabel.emailError}</p>}
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
      {/* Campo accetta termini e condizioni */}
      <ContainerInput containerStyle="flex-col gap-y-3">
        <div className="flex items-center justify-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            name="checkbox"
            className="w-4 h-4 border rounded focus:ring-1 border-custom-border bg-custom-background focus:ring-custom-accent checked:bg-custom-accent dark:border-dark-border dark:bg-dark-background dark:ring-dark-accent dark:checked:bg-dark-accent"
            checked={signupForm.termsCheckbox}
            onFocus={() => handleResetLabel('checkboxError')}
            onChange={event => handleChange(event, 'termsCheckbox')} />
          <label htmlFor="terms" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray ms-2">
            {t('signupCheckboxLabel')}
            <Link to="/terms-and-conditions" className="ms-2 text-custom-textSecondaryColor dark:text-dark-textSecondaryColor hover:text-custom-solidColor dark:hover:text-dark-solidColor">
              {t('singupCheckboxLink')}
            </Link>
          </label>
        </div>
        {errorLabel.checkboxError !== "" && <p className="text-red-500 font-light text-sm">{errorLabel.checkboxError}</p>}
      </ContainerInput>
      {/* Bottone registrati */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
          {t('signupBottone')}
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
