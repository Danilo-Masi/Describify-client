import { useEffect, useState } from "react";
//TextAPI
import { callOPENAIAPI } from "../services/textAPI";
//Components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Home from "../components/Home";

export default function HomePage() {

    const [accessToken, setAccessToken] = useState(false);
    const [emailUser, setEmailUser] = useState('');
    

    useEffect(() => {
        try {
            const dataAccesso: string | null = sessionStorage.getItem('token');
            if (dataAccesso) {
                const tokenObject = JSON.parse(dataAccesso);
                const emailUtente: string = tokenObject.user?.email;
                setEmailUser(emailUtente);
                setAccessToken(true);
            }
        } catch (error) {
            console.error("Errore durante il caricamento del token d'accesso" + error);
            setAccessToken(false);
        }
    }, []);

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar token={accessToken} emailUser={emailUser} />
            <Home accessToken={accessToken}/>
            <Features />
            <Prices />
            <Faqs />
        </Layout>
    )
}
