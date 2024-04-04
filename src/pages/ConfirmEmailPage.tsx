import { useState, useEffect } from "react";
//Supabase
import { supabase } from '../services/client.tsx';
//React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Components
import Layout from "../components/Layout";

export default function ConfirmEmailPage() {
    const navigate: NavigateFunction = useNavigate();
    const [emailVerificated, setEmailVerificated] = useState(false);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            const verificaEmail = session?.user?.last_sign_in_at != null;
            setEmailVerificated(verificaEmail);
        });
        return () => authListener.subscription.unsubscribe();
    }, []);

    const handleResendEmail = async () => {
        console.log('Rinvia email di verifica account');
    }

    return (
        <Layout mdHeight="md:h-svh" mdFlexOrientation="md:flex-col" justifyPosition="justify-center">
            <div className="w-full h-svh flex items-center justify-center">
                <div className="w-[90%] md:w-1/3 h-auto flex flex-col items-center justify-center text-center gap-y-5 p-10 rounded-lg border border-custom-border dark:border-dark-border bg-custom-elevation dark:bg-dark-elevation">
                    <p className="text-2xl font-bold text-balance text-custom-textPrimary dark:text-dark-textPrimary">Describify</p>
                    <p className="text-3xl font-bold text-balance text-custom-textPrimary dark:text-dark-textPrimary">Please confirm your email</p>
                    <p className="text-md font-medium text-balance text-custom-textSecondary dark:text-dark-textSecondary">Please check you email and click the link to confirm, once confirmed, your account will be activated.</p>
                    <p className="text-md font-medium text-balance text-custom-textSecondary dark:text-dark-textSecondary">Didn't recieve any email?</p>
                    {!emailVerificated ? (
                        <button
                            type="button"
                            className="text-dark-textPrimary bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ">
                            Resend Email
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/')}
                            type="button"
                            className="text-dark-textPrimary bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ">
                            Go to app
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    )
}
