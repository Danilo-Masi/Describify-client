import { Dispatch, SetStateAction, useEffect, useState } from "react";
//Supabase
import { supabase } from '../services/client.tsx';
//Components
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

interface HomePageProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HomePage({ setModalWaitListOpen }: HomePageProps) {

    const [accessToken, setAccessToken] = useState(false);
    const [emailUser, setEmailUser] = useState('');

    {/* 
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            const userEmail = session?.user?.email;
            const verificaEmail = session?.user?.email_confirmed_at != null;
            if (session && userEmail && verificaEmail) {
                setEmailUser(userEmail);
                setAccessToken(true);
            } else {
                setEmailUser('');
                setAccessToken(false);
            }
        });
        // Cleanup 
        return () => authListener.subscription.unsubscribe();
    }, []);
    */}

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar accessToken={accessToken} emailUser={emailUser} setModalWaitListOpen={setModalWaitListOpen} />
            {/* {accessToken ? <Home id="Home" /> : <Hero id="Home" />} */}
            <Hero id="Home" />
            <Features id="Features" accessToken={accessToken} />
            <Prices id="Prices" accessToken={accessToken} setModalWaitListOpen={setModalWaitListOpen} />
            <Faqs id="Faqs" accessToken={accessToken} />
            <Footer />
        </Layout>
    )
}
