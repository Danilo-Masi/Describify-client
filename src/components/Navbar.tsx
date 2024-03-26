import { useState, useCallback } from "react";
//React-router
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
//Flowbite
import { Dropdown } from 'flowbite-react';
//Supabase
import { supabase } from '../services/client.tsx';
//Components
import ModalConfirm from "./ModalConfirm.tsx";
import ModalUsage from "./ModalUsage.tsx";
import ModalSettings from "./ModalSettings.tsx";

function Logo() {
    return (
        <div className="w-1/2 md:w-1/4">
            <h1 className="text-2xl">Describify</h1>
        </div>
    );
}

function MenuElements() {
    return (
        <div className="md:w-2/4 hidden md:flex items-center justify-center gap-3">
            <Link to="#Home" smooth>Home</Link>
            <Link to="#Features" smooth>Features</Link>
            <Link to="#Prices" smooth>Prices</Link>
            <Link to="#Faqs" smooth>Faqs</Link>
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
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button
                        type="button"
                        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Signup
                    </button>
                </Link>
            </div>
            <div className="md:hidden w-1/2 flex items-center justify-end">
                <Link to="/signin">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
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
                return;
            }
            sessionStorage.removeItem('token');
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
                <Dropdown.Item onClick={() => setCurrentModal(ModalType.SIGNOUT)} className="text-red-600">Sign out</Dropdown.Item>
            </Dropdown>
            {currentModal === ModalType.SIGNOUT && <ModalConfirm onClose={closeModal} onConfirm={() => handleSignout()} />}
            {currentModal === ModalType.USAGE && <ModalUsage onClose={closeModal} />}
            {currentModal === ModalType.SETTINGS && <ModalSettings onClose={closeModal} />}
        </div>
    );
}

interface NavbarProps {
    token: boolean;
    emailUser: string;
    id: string;
}

export default function Navbar({ token, emailUser, id }: NavbarProps) {
    return (
        <div className="w-full h-[12svh] flex items-center justify-center bg-slate-800 text-white" id={id}>
            <div className="w-[90%] md:w-[85%] flex items-center">
                <Logo />
                <MenuElements />
                {token ? <UserProfile emailUser={emailUser} /> : <AccessButton />}
            </div>
        </div>
    );
}
