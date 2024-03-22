import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'flowbite-react';
//Supabase
import { supabase } from '../services/client.tsx';
import { useState } from "react";
import ModalMenu from "./ModalMenu.tsx";
import ModalConfirm from "./ModalConfirm.tsx";

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
            <p>Home</p>
            <p>Features</p>
            <p>Prices</p>
            <p>Faq's</p>
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
    emailUser: string,
}

function UserProfile({ emailUser }: UserProfileProps) {

    const navigate = useNavigate();

    const [confirmModal, setConfirmModal] = useState(false);

    //Funzione per permettere all'utente di effettuare il logout dall'app
    const handleSignout = async () => {
        try {
            let { error } = await supabase.auth.signOut();
            if (error) {
                alert('Errore durante la fase di logout');
                console.error('Errore durante la fase di logout', error);
                return;
            } else {
                sessionStorage.removeItem('token');
                navigate('/signin');
            }
        } catch (error) {
            console.error('Errore', error);
        }
    }

    const emailUtente: string = emailUser.length > 10 ? emailUser.slice(0, emailUser.indexOf('@')) : emailUser;

    return (
        <div className="w-1/2 md:w-1/4 flex flex-col h-auto items-end">
            <Dropdown label={emailUtente} color="blue">
                <Dropdown.Header>
                    <span className="block truncate text-sm font-medium">{emailUser}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setConfirmModal(true)}>Sign out</Dropdown.Item>
            </Dropdown>
            {confirmModal ? <ModalConfirm onClose={() => setConfirmModal(false)}/> : ''}
        </div>
    );
}

interface NavbarProps {
    token: boolean,
    emailUser: string
}

export default function Navbar({ token, emailUser }: NavbarProps) {
    return (
        <div className="w-full h-[12svh] flex items-center justify-center bg-gray-300">
            <div className="w-[90%] md:w-[85%] flex items-center">
                <Logo />
                <MenuElements />
                {token ? <UserProfile emailUser={emailUser} /> : <AccessButton />}
            </div>
        </div>
    );
}
