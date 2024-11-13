// React
import { useState, useEffect, Dispatch, SetStateAction } from "react";
// React-router
import { Link } from "react-router-dom";
// I18Next
import { useTranslation } from 'react-i18next';
// Utils
import { scrollToElement } from '../utilities/useAnimations.tsx';
// Components
import Logo from "./Logo.tsx";
import { SparklingStars } from "./SvgComponents.tsx";

// Link di navigazione della pagina
function MenuElements() {
    // Componente per la traduzione
    const { t } = useTranslation();

    return (
        <div className="md:w-2/4 hidden md:flex items-center justify-center gap-8">
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Home")}>{t('linkHome')}</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Features")}>{t('linkFunzionalità')}</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Prices")}>{t('linkPrezzi')}</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Faqs")}>Faqs</Link>
        </div >
    );
}

// Bottone per l'iscrizione alla waitlist --> DA MODIFICARE SUCCESSIVAMENTE
function JoinWaitllistButton({ setModalWaitlistOpen }: { setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>; }) {
    // Componente per la traduzione
    const { t } = useTranslation();
    // Funzione per aprire il popup con il form per l'iscrizione alla waitlist
    const handleOpenWaitlist = () => {
        setModalWaitlistOpen(true);
    }

    return (
        <div className="w-full md:w-1/4 flex items-center justify-end">
            <button
                onClick={handleOpenWaitlist}
                type="button"
                className="w-fit p-3 md:px-5 inline-flex items-center justify-center gap-x-3 text-md font-semibold text-dark-textPrimaryGray rounded-lg border-0 ring-0 bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                {t('bottoneIscriviWaitlist')}
                <SparklingStars />
            </button>
        </div>
    );
}

export default function Navbar({ isBannerVisibile, setModalWaitlistOpen }: { isBannerVisibile: boolean, setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>; }) {
    // Stato per verificare se l'utente ha scrollato nella pagina o meno
    const [isScrolled, setIsScrolled] = useState(false);
    // Effetto che modifica lo stato precedente
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full h-[12svh] ${isBannerVisibile ? "top-[10svh] md:top-[7svh]" : "top-0"} flex items-center justify-center sticky z-20 ${isScrolled && 'backdrop-blur-lg backdrop-brightness-95'}`} >
            <div className="w-[90%] flex items-center">
                <Logo />
                <MenuElements />
                <JoinWaitllistButton setModalWaitlistOpen={setModalWaitlistOpen} />
            </div>
        </div>
    );
}
