import { Dispatch, SetStateAction, useCallback, useState } from "react";
//Axios
import axios from 'axios';
//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Utilities
import { useEmail } from "../utilities/useEmail.tsx";
//Components
import { ContainerInput } from "../components/Layout";
import { IconaLogo, NonVisibilityIcon, VisibilityIcon } from "../components/SvgComponents.tsx";

interface SignupFormProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setEmailPut: Dispatch<SetStateAction<string>>;
  setAlertOpen: Dispatch<SetStateAction<boolean>>;
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAlertColor: Dispatch<SetStateAction<string>>;
}

interface SignupFormState {
  name: string;
  email: string;
  password: string;
}

//Url del server
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
const SERVER_URL = 'http://localhost:3000';

export default function SignupForm({ setModalOpen, setEmailPut, setAlertOpen, setAlertMessage, setAlertColor }: SignupFormProps) {

  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errorLabel, setErrorLabel] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    checkboxError: '',
  });
  const [termsCheckbox, setTermsCheckbox] = useState(false);
  const [signupForm, setSignupForm] = useState<SignupFormState>({
    name: '',
    email: '',
    password: '',
  });

  //Funzione per impostare i valori del form
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setSignupForm(prevState => ({
      ...prevState,
      [fieldName]: event.target.value
    }));
  }, []);

  //Funzione per validare i dati inseriti dall'utente nel form
  const handleValidate = useCallback(() => {
    let valid = true;
    // Validazione input nome
    if (signupForm.name === "") {
      setErrorLabel(prevState => ({
        ...prevState,
        nameError: 'Inserire un nome valido prima di procedere',
      }));
      valid = false;
    } else {
      setErrorLabel(prevState => ({
        ...prevState,
        nameError: '',
      }));
    }
    // Validazione input email
    if (signupForm.email === "" || !useEmail(signupForm.email)) {
      setErrorLabel(prevState => ({
        ...prevState,
        emailError: 'Inserire un email valida prima di procedere',
      }));
      valid = false;
    } else {
      setErrorLabel(prevState => ({
        ...prevState,
        emailError: '',
      }));
    }
    // Validazione input password
    if (signupForm.password === "") {
      setErrorLabel(prevState => ({
        ...prevState,
        passwordError: 'Inserire una password valida prima di procedere',
      }));
      valid = false;
    } else if (signupForm.password.length < 6) {
      setErrorLabel(prevState => ({
        ...prevState,
        passwordError: 'La password deve contenere almeno 6 caratteri',
      }));
      valid = false;
    } else {
      setErrorLabel(prevState => ({
        ...prevState,
        passwordError: '',
      }));
    }
    // Validazione checkbox
    if (termsCheckbox === false) {
      setErrorLabel(prevState => ({
        ...prevState,
        checkboxError: 'Devi accettare i termini e le condizioni prima di procedere',
      }));
      valid = false;
    } else {
      setErrorLabel(prevState => ({
        ...prevState,
        checkboxError: '',
      }));
    }
    return valid;
  }, [signupForm.name, signupForm.email, signupForm.password]);

  //Funzione per resettare il valore della ErrorLabel
  const handleResetLabel = (fieldName: string) => {
    setErrorLabel(prevState => ({
      ...prevState,
      [fieldName]: '',
    }));
  }

  //Funzione per gestire gli errori nella fase di registrazione
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
          setAlertMessage('Errore durante la fase di signup');
      }
    } else {
      setAlertMessage('Errore di rete o problema imprevisto');
    }
    setAlertColor('failure');
    setAlertOpen(true);
  }, [setAlertMessage, setAlertColor, setAlertOpen]);

  //Funzione per gestire il successo della fase di registrazione
  const handleSuccess = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
    setAlertMessage('Utente registrato correttamente');
    setAlertColor('success');
    setAlertOpen(true);
    navigate('/product');
  }, [setAlertMessage, setAlertColor, setAlertOpen, navigate]);

  //Funzione per registrare un nuovo account
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validazioneDati = handleValidate();
    if (validazioneDati) {
      try {
        const response = await axios.post(`${SERVER_URL}/signup`, {
          email: signupForm.email,
          password: signupForm.password,
        });
        if (response.status === 200) {
          handleSuccess(response.data.token);
        }
      } catch (error: any) {
        console.error('Errore durante la fase di signup', error);
        handleError(error);
      }
    }
  }

  return (
    <form
      onSubmit={handleSignup}
      className="w-full md:w-1/2 h-auto min-h-svh flex flex-col gap-4 items-center justify-center px-6 md:px-32 py-6 md:py-0">
      {/* Intestazione */}
      <ContainerInput containerStyle="w-full flex flex-col gap-y-3 mb-5">
        <div className="w-full flex items-center justify-center gap-x-2">
          <IconaLogo width="30" height="30" />
          <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
        </div>
        <h1 className="text-4xl text-center font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('signupWelcome')}</h1>
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
            checked={termsCheckbox}
            onFocus={() => handleResetLabel('checkboxError')}
            onChange={() => setTermsCheckbox(!termsCheckbox)} />
          <label htmlFor="terms" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray ms-2">
            {t('signupCheckboxLabel')}
            <Link to="/terms-and-conditions" className="text-custom-textSecondaryColor dark:text-dark-textSecondaryColor hover:text-custom-solidColor dark:hover:text-dark-solidColor">
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
