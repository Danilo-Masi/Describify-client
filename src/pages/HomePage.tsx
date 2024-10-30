// React
import { Dispatch, SetStateAction } from "react";
// Components
import { Layout } from "../components/Layout";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Prices from "../components/Prices";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import WaitlistSection from "../components/WaitlistSection";

export default function HomePage({ setModalWaitListOpen }: { setModalWaitListOpen: Dispatch<SetStateAction<boolean>>; }) {
    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Banner />
            <Navbar setModalWaitlistOpen={setModalWaitListOpen} />
            <Hero id="Home" />
            <Features id="Features" />
            <Prices id="Prices" />
            <Faqs id="Faqs" />
            <WaitlistSection />
            <Footer />
        </Layout>
    );
}
