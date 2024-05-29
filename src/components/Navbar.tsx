import { useState, useEffect, Dispatch, SetStateAction } from "react";
//React-router
import { Link } from "react-router-dom";
//Utils
import { scrollToElement } from '../utilities/useAnimations.tsx';
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import ActiveButton from "./ActiveButton.tsx";
import Logo from "./Logo.tsx";
//PostHog analytics
import posthog from "posthog-js";

{/* 
function AccessButton() {
    return (
        <>
            <div className="md:w-1/4 hidden md:flex items-center justify-end gap-2">
                <Link to="/signin">
                    <button
                        type="button"
                        className="focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 bg-trasparent hover:bg-custom-accent dark:hover:bg-dark-accent text-custom-accent dark:text-dark-textPrimary hover:text-dark-textPrimary dark:hover:text-dark-textPrimary border border-custom-accent dark:border-dark-accent">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2.5 bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent text-dark-textPrimary">
                        Signup
                    </button>
                </Link>
            </div>
            <div className="md:hidden w-1/2 flex items-center justify-end">
                <Link to="/signin">
                    <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2.5 bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent text-dark-textPrimary">
                        Get started
                    </button>
                </Link>
            </div>
        </>
    );
}

interface UserProfileProps {
    emailUser: string;
}

//Costanti per i Modal che devono essere aperti
const ModalType = {
    NONE: 'NONE',
    USAGE: 'USAGE',
    SETTINGS: 'SETTINGS',
    SIGNOUT: 'SIGNOUT',
};

function UserProfile({ emailUser }: UserProfileProps) {

    const navigate = useNavigate();

    const [currentModal, setCurrentModal] = useState(ModalType.NONE);

    //Funzione per permettere all'utente di effettuare il logout dall'app
    const handleSignout = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Errore durante la fase di logout', error);
                // Qui potresti decidere di mostrare un messaggio di errore all'utente. //
                return;
            }
            // Redirezione all'utente verso la pagina di signin dopo il logout. //
            navigate('/signin');
        } catch (error) {
            console.error('Errore', error);
        }
    }, [navigate]);


    //Formattazione dell'email dell'utente
    const emailUtente: string = emailUser.length > 10 ? emailUser.slice(0, emailUser.indexOf('@')) : emailUser;

    //Funzione per chiudere i Modal
    const closeModal = useCallback(() => setCurrentModal(ModalType.NONE), []);

    return (
        <div className="w-1/2 md:w-1/4 flex flex-col h-auto items-end">
            <Dropdown label={emailUtente} color="blue">
                <Dropdown.Header>
                    <span className="block truncate text-sm font-medium">{emailUser}</span>
                </Dropdown.Header>
                <Dropdown.Item onClick={() => setCurrentModal(ModalType.USAGE)}>Usage</Dropdown.Item>
                <Dropdown.Item onClick={() => setCurrentModal(ModalType.SETTINGS)}>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setCurrentModal(ModalType.SIGNOUT)} className="text-red-600 dark:text-red-500">Sign out</Dropdown.Item>
            </Dropdown>
            {currentModal === ModalType.SIGNOUT && <ModalLogout onClose={closeModal} onConfirm={() => handleSignout()} />}
            {currentModal === ModalType.USAGE && <ModalUsage onClose={closeModal} />}
            {currentModal === ModalType.SETTINGS && <ModalSettings onClose={closeModal} />}
        </div>
    );
}

*/}


//Link di navigazione della NavBar
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

interface JoinWaitllistButtonProps {
    setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>;
}

//Bottone 'iscriviti' della NavBar
function JoinWaitllistButton({ setModalWaitlistOpen }: JoinWaitllistButtonProps) {

    const { t } = useTranslation();

    const handleOpenWaitlist = () => {
        posthog.capture('navbar_waitlist_button', {
            'title': 'waitlist aperta dalla navbar'
        });
        setModalWaitlistOpen(true);
    }

    return (
        <div className="w-full md:w-1/4 flex items-center justify-end">
            <ActiveButton text={t('buttonSubscribeLong')} onClick={() => handleOpenWaitlist()} />
        </div>
    );
}

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
