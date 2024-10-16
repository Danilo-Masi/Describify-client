// React
import { useEffect } from "react";
// React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Utilities
import { checkAuth } from "../utilities/useVerify";
// Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SignupForm from "../components/SignupForm.tsx";

export default function SignupPage() {

    const navigate: NavigateFunction = useNavigate();

    // Effetto per verificare se l'utente è già loggato nella piattaforma
    useEffect(() => {
        const verifyUser = async () => {
            const isAuthenticated = await checkAuth();
            if (isAuthenticated) {
                toast.info("Utente già loggato", {
                    onClose: () => navigate('/product'),
                });
            }
        };
        verifyUser();
    }, [navigate]);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm />
            <AccessBox />
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </Layout>
    );
}
