// React
import { Dispatch, SetStateAction, Suspense } from "react";
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

export default function HomePage({ isBannerVisible, setModalWaitListOpen }: { isBannerVisible: boolean, setModalWaitListOpen: Dispatch<SetStateAction<boolean>>; }) {
    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Banner />
            <Navbar isBannerVisibile={isBannerVisible} setModalWaitlistOpen={setModalWaitListOpen} />
            <Hero id="Home" />
            <Suspense fallback={<div >Loading...</div>}>
                <Features id="Features" />
                <Prices id="Prices" />
                <Faqs id="Faqs" />
                <WaitlistSection />
                <Footer />
            </Suspense>
        </Layout>
    );
}
