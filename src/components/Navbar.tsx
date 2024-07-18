import { useState, useEffect, Dispatch, SetStateAction } from "react";
// React-router
import { Link } from "react-router-dom";
// Utils
import { scrollToElement } from '../utilities/useAnimations.tsx';
// I18Next
import { useTranslation } from 'react-i18next';
// LogLib
import { loglib } from "@loglib/tracker"
// Components
import ActiveButton from "./ActiveButton.tsx";
import Logo from "./Logo.tsx";

// Link di navigazione della NavBar
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

// Bottone di apertura della waitlist (DA MODIFICARE)
interface JoinWaitllistButtonProps {
    setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>;
}

function JoinWaitllistButton({ setModalWaitlistOpen }: JoinWaitllistButtonProps) {

    const { t } = useTranslation();

    const handleOpenWaitlist = () => {
        loglib.track("click 'iscriviti alla waitlist' navbar");
        setModalWaitlistOpen(true);
    }

    return (
        <div className="w-full md:w-1/4 flex items-center justify-end">
            <ActiveButton text={t('buttonSubscribeLong')} onClick={() => handleOpenWaitlist()} />
        </div>
    );
}

// Navbar completa
interface NavbarProps {
    accessToken?: boolean;
    emailUser?: string;
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ setModalWaitListOpen }: NavbarProps) {

    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={`w-full h-[12svh] flex items-center justify-center sticky top-0 z-20 ${isScrolled && 'backdrop-blur-lg backdrop-brightness-95'}`} >
            <div className="w-[90%] flex items-center">
                <Logo width="40" height="40" />
                <MenuElements />
                <JoinWaitllistButton setModalWaitlistOpen={setModalWaitListOpen} />
            </div>
        </div>
    );
}
