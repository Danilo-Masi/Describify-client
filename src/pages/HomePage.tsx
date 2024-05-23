import { Dispatch, SetStateAction } from "react";
//Components
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

interface HomePageProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function HomePage({ setModalWaitListOpen, setAlertOpen, setAlertMessage }: HomePageProps) {
    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar setModalWaitListOpen={setModalWaitListOpen} />
            <Hero id="Home" setModalWaitListOpen={setModalWaitListOpen} setAlertOpen={setAlertOpen} setAlertMessage={setAlertMessage}/>
            <Features id="Features" accessToken={false} setModalWaitListOpen={setModalWaitListOpen}/>
            <Prices id="Prices" accessToken={false} setModalWaitListOpen={setModalWaitListOpen} />
            <Faqs id="Faqs" accessToken={false} />
            <Footer />
        </Layout>
    );
}
