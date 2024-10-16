// React
import { Dispatch, SetStateAction } from "react";
// Components
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

interface HomePageProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HomePage({ setModalWaitListOpen }: HomePageProps) {

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar setModalWaitListOpen={setModalWaitListOpen} />
            <Hero id="Home" />
            <Features id="Features" accessToken={false} />
            <Prices id="Prices" accessToken={false} />
            <Faqs id="Faqs" accessToken={false} />
            <Footer />
        </Layout>
    );
}
