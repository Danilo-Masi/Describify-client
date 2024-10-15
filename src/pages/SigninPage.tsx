import { Dispatch, SetStateAction, useEffect } from "react";
// React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SigninForm from "../components/SigninForm.tsx";
// Utilities
import { checkAuth } from "../utilities/useVerify";

interface SigninPageProps {
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    setAlertColor: Dispatch<SetStateAction<string>>;
}

export default function SigninPage({ setAlertOpen, setAlertMessage, setAlertColor }: SigninPageProps) {

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            const isAuthenticated = await checkAuth();
            if (isAuthenticated) {
                alert('Utente già loggato');
                navigate('/product');
            }
        };
        verifyUser();
    }, [navigate]);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm
                setAlertOpen={setAlertOpen}
                setAlertMessage={setAlertMessage}
                setAlertColor={setAlertColor} />
            <AccessBox />
        </Layout>
    );
}
