import { useEffect, useState } from "react";
//Utilities
import { verifyLog } from '../utilities/useVerify.tsx';
//React-router
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SigninForm from "../components/SigninForm.tsx";
import ModalResetPassword from "../components/ModalResetPassword.tsx";

export default function SigninPage() {

    const [isModalResetPassword, setModalResetPassword] = useState(false);

    const verificaLog = verifyLog();
    const navigate: NavigateFunction = useNavigate();

    //**** Verifica che l'utente non sia già loggato ****//
    useEffect(() => {
        if (verificaLog) {
            alert('Utente già loggato nella piattaforma');
            navigate('/product');
        } else {
            console.log('utente non ancora loggato');
        }
    }, [verificaLog]);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm setModalResetPassword={setModalResetPassword} />
            <AccessBox />
            {isModalResetPassword && <ModalResetPassword onClose={() => setModalResetPassword(false)} />}
        </Layout>
    );
}
