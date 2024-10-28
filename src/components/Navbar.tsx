// React
import { useState, useEffect, Dispatch, SetStateAction } from "react";
// React-router
import { Link } from "react-router-dom";
// I18Next
import { useTranslation } from 'react-i18next';
// LogLib
import { loglib } from "@loglib/tracker"
// Utils
import { scrollToElement } from '../utilities/useAnimations.tsx';
// Components
import ActiveButton from "./ActiveButton.tsx";
import Logo from "./Logo.tsx";

// Link di navigazione della pagina
function MenuElements() {
    const { t } = useTranslation();
    return (
        <div className="md:w-2/4 hidden md:flex items-center justify-center gap-8">
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Home")}>Home</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Features")}>{t('linkFeatures')}</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Prices")}>{t('linkPrices')}</Link>
            <Link to="/" className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-medium cursor-pointer" onClick={() => scrollToElement("#Faqs")}>Faqs</Link>
        </div >
    );
}

// Bottone per l'iscrizione alla waitlist --> DA MODIFICARE SUCCESSIVAMENTE
function JoinWaitllistButton({ setModalWaitlistOpen }: { setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>; }) {
    const { t } = useTranslation();
    // Funzione per aprire il popup con il form per l'iscrizione alla waitlist
    // Questo evento viene tracciato tramite LogLib
    const handleOpenWaitlist = () => {
        //loglib.track("click 'iscriviti alla waitlist' navbar"); //ATTIVARE
        setModalWaitlistOpen(true);
    }
    return (
        <div className="w-full md:w-1/4 flex items-center justify-end">
            <ActiveButton text={t('buttonSubscribeLong')} onClick={() => handleOpenWaitlist()} />
        </div>
    );
}

export default function Navbar({ isBannerVisible, setModalWaitlistOpen }: { isBannerVisible: boolean, setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>; }) {
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
        <div className={`w-full h-[12svh] flex items-center justify-center sticky z-20 ${isScrolled && 'backdrop-blur-lg backdrop-brightness-95'} ${isBannerVisible ? 'top-[10svh] md:top-[7svh]' : 'top-0'}`} >
            <div className="w-[90%] flex items-center">
                <Logo />
                <MenuElements />
                <JoinWaitllistButton setModalWaitlistOpen={setModalWaitlistOpen} />
            </div>
        </div>
    );
}
