import { Dispatch, SetStateAction, useEffect, useState } from "react";
//React-router
import { useLocation } from "react-router-dom";
//Components
import { Layout } from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface TermsDataProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

interface ParagraphProps {
    title: string;
    content: string;
}

interface PrivacyDataProps {
    titlePrimary: string;
    captionPrimary: string;
    paragraphs: ParagraphProps[],
}

export default function LegalPage({ setModalWaitListOpen }: TermsDataProps) {

    const location = useLocation();

    const [data, setData] = useState<PrivacyDataProps | null>(null);

    useEffect(() => {
        const currentURL = location.pathname; //Ottiene l'URL corrente della pagina
        if (currentURL.includes("terms-and-conditions")) {
            import("../data/legalData/terms_&_conditions.json").then((data) => {
                setData(data);
            });
        } else if (currentURL.includes("privacy-policy")) {
            import("../data/legalData/privacy_policy.json").then((data) => {
                setData(data);
            });
        } else {
            import("../data/legalData/cookie_policy.json").then((data) => {
                setData(data);
            });
        }
    }, [location.pathname]);

    return (
        <Layout padding="px-0" mdFlexOrientation="md:flex-col" mdHeight="md:h-auto">
            <Navbar setModalWaitListOpen={setModalWaitListOpen} />
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
