import { useState, useCallback, useEffect, Dispatch, SetStateAction } from "react";
//React-router
import { useNavigate, Link } from "react-router-dom";
//GSAP
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
//Flowbite
import { Dropdown } from 'flowbite-react';
//Supabase
import { supabase } from '../services/client.tsx';
//Components
import ModalLogout from "./ModalLogout.tsx";
import ModalUsage from "./ModalUsage.tsx";
import ModalSettings from "./ModalSettings.tsx";

function Logo() {

    const handleScroll = () => {
        gsap.to(window, { duration: 1, scrollTo: { y: "#Home", offsetY: 50 } });
    }

    return (
        <div className="w-1/2 md:w-1/4">
            <h1 className="text-3xl cursor-pointer font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray" onClick={() => handleScroll()}>Describify</h1>
        </div>
    );
}

function MenuElements() {

    const handleScroll = (divId: string) => {
        gsap.to(window, { duration: 1, scrollTo: { y: divId, offsetY: 50 } });
    }

    return (
        <div className="md:w-2/4 hidden md:flex items-center justify-center gap-8">
            <p className={`text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-semibold cursor-pointer`} onClick={() => handleScroll("#Home")}>Home</p>
            <p className={`text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-semibold cursor-pointer`} onClick={() => handleScroll("#Features")}>Features</p>
            <p className={`text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-semibold cursor-pointer`} onClick={() => handleScroll("#Prices")}>Prices</p>
            <p className={`text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-semibold cursor-pointer`} onClick={() => handleScroll("#Faqs")}>Faqs</p>
        </div>
    );
}

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

interface JoinWaitllistButtonProps {
    setModalWaitlistOpen: Dispatch<SetStateAction<boolean>>;
}

function JoinWaitllistButton({ setModalWaitlistOpen }: JoinWaitllistButtonProps) {
    return (
        <div className="w-1/2 md:w-1/4 flex items-center justify-end">
            <button
                onClick={() => setModalWaitlistOpen(true)}
                type="button"
                className="text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5">
                Iscriviti alla waitlist
            </button>
        </div>
    );
}

interface NavbarProps {
    accessToken: boolean;
    emailUser: string;
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ accessToken, emailUser, setModalWaitListOpen }: NavbarProps) {

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
        <div className={`w-full h-[12svh] flex items-center justify-center sticky top-0 z-10 ${isScrolled && 'backdrop-blur-lg backdrop-brightness-100'}`} >
            <div className="w-[90%] flex items-center">
                <Logo />
                <MenuElements />
                <JoinWaitllistButton setModalWaitlistOpen={setModalWaitListOpen} />
                {/* 
                {accessToken ? <UserProfile emailUser={emailUser} /> : <AccessButton />}
                */}
            </div>
        </div>
    );
}
