import { Dispatch, SetStateAction, useEffect, useState } from "react";
//Utilities
import { isAuthenticated } from '../utilities/useVerify.tsx';
//React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SigninForm from "../components/SigninForm.tsx";
import ModalResetPassword from "../components/ModalResetPassword.tsx";


interface SigninPageProps {
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    setAlertColor: Dispatch<SetStateAction<string>>;
}

export default function SigninPage({ setAlertOpen, setAlertMessage, setAlertColor }: SigninPageProps) {

    const [isModalResetPassword, setModalResetPassword] = useState(false);

    const isLogged = isAuthenticated();
    const navigate: NavigateFunction = useNavigate();

    //Funzione per verificare che l'utente sia già loggato nella piattaforma
    useEffect(() => {
        if (isLogged) {
            setAlertMessage('Utente già loggato nella piattaforma');
            setAlertOpen(true);
            navigate('/product');
        }
    }, [isLogged]);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm
                setModalResetPassword={setModalResetPassword}
                setAlertOpen={setAlertOpen}
                setAlertMessage={setAlertMessage}
                setAlertColor={setAlertColor} />
            <AccessBox />
            {isModalResetPassword && <ModalResetPassword onClose={() => setModalResetPassword(false)} />}
        </Layout>
    );
}
