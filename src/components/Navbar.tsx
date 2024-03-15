import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Supabase
import { supabase } from '../services/client.tsx';

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

function UserProfile({ emailUser }: { emailUser: string }) {
    //Funzione per navigare tra le varie pagine
    const navigate = useNavigate();

    const [visibile, setVisibile] = useState(false);

    //Funzione per permettere all'utente di effettuare il logout dall'app
    const handleSignout = async () => {
        console.log('Esci???');
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

    return (
        <div className="w-1/2 md:w-1/4 flex flex-col h-auto items-end">
            <button
                type="button"
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center inline-block"
                onClick={() => setVisibile(!visibile)}>
                {emailUser}
            </button>
            <div
                className={`h-auto flex-col items-start gap-2 px-16 py-3 absolute top-16 rounded-lg bg-gray-100 mt-1 ${visibile ? 'flex' : 'hidden'}`}>
                <p>Token 0</p>
                <button onClick={handleSignout}>Logout</button>
            </div>
        </div>
    );
}


export default function Navbar({ token, emailUser }: { token: boolean, emailUser: string }) {
    return (
        <div className="w-full h-[12svh] flex items-center justify-center bg-gray-300">
            <div className="w-[90%] md:w-[80%] flex items-center">
                <Logo />
                <MenuElements />
                {token ? <UserProfile emailUser={emailUser} /> : <AccessButton />}
            </div>
        </div>
    );
}
