import { useEffect, useState } from "react";
//Utilities
import { isAuthenticated } from '../utilities/useVerify.tsx';
//React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SignupForm from "../components/SignupForm.tsx";
import ModalConfirmAccount from "../components/ModalConfirmAccount.tsx";

export default function SignupPage() {

    const [emailPut, setEmailPut] = useState("");
    const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);

    const isLogged = isAuthenticated();
    const navigate: NavigateFunction = useNavigate();

    //Funzione per verificare che l'utente sia già loggato nella piattaforma
    useEffect(() => {
        if (isLogged) {
            alert('Utente già loggato nella piattaforma'); //MODIFICARE L'ALERT
            navigate('/product');
        }
    }, [isLogged]);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm setModalOpen={setIsModalEmailOpen} setEmailPut={setEmailPut} />
            <AccessBox />
            {isModalEmailOpen && <ModalConfirmAccount emailUser={emailPut} />}
        </Layout>
    );
}
