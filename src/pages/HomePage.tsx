import { useEffect, useState } from "react";
//Components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

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
            {accessToken ? <Home id="Home"/> : <Hero id="Home"/> }
            <Features id="Features" />
            <Prices id="Prices" />
            <Faqs id="Faqs" />
            <Footer />
        </Layout>
    )
}
