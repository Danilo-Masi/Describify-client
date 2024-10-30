// React
import { Dispatch, SetStateAction, useEffect, useState } from "react";
// React-router
import { useLocation } from "react-router-dom";
// Components
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../utilities/useLanguage";

interface ParagraphProps {
    title: string;
    content: string;
}

interface PrivacyDataProps {
    titlePrimary: string;
    captionPrimary: string;
    paragraphs: ParagraphProps[],
}

export default function LegalPage({ setModalWaitListOpen }: { setModalWaitListOpen: Dispatch<SetStateAction<boolean>>; }) {

    // Funzione per capire la lingua utilizzata
    const language = useLanguage();
    // Funzione per capire il pathname
    const location = useLocation();
    // Stato che gestisce la risorsa da mostrare
    const [data, setData] = useState<PrivacyDataProps | null>(null);

    useEffect(() => {
        const currentURL = location.pathname;
        console.log(language);

        if (language === "it") {
            if (currentURL.includes("terms-and-conditions")) {
                import("../data/legalData/terms&conditions_it.json").then((data) => {
                    setData(data);
                });
            } else if (currentURL.includes("privacy-policy")) {
                import("../data/legalData/privacyPolicy_it.json").then((data) => {
                    setData(data);
                });
            } else {
                import("../data/legalData/cookiePolicy_it.json").then((data) => {
                    setData(data);
                });
            }
        } else {
            if (currentURL.includes("terms-and-conditions")) {
                import("../data/legalData/terms&conditions_en.json").then((data) => {
                    setData(data);
                });
            } else if (currentURL.includes("privacy-policy")) {
                import("../data/legalData/privacyPolicy_en.json").then((data) => {
                    setData(data);
                });
            } else {
                import("../data/legalData/cookiePolicy_en.json").then((data) => {
                    setData(data);
                });
            }
        }
    }, [location.pathname]);

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar setModalWaitlistOpen={setModalWaitListOpen} />
            <div className="w-[90%] md:w-[50%] h-auto flex flex-col items-start justify-start gap-y-8 py-5 md:py-10" id="Start">
                <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{data?.titlePrimary}</h1>
                <p className="text-md font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{data?.captionPrimary}</p>
                {data?.paragraphs.map((paragraph, index) => (
                    <div key={index} className="flex flex-col gap-y-1">
                        <h2 className="text-xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{paragraph.title}</h2>
                        <p className="text-md font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{paragraph.content}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </Layout>
    );
}
