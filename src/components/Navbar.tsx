import { useState } from "react";
import { Link } from "react-router-dom";
//Images
import Avatar from '../assets/images/Avatar.webp';

function Logo() {
    return (
        <div className="w-full md:w-1/4">
            <h1 className="text-2xl">Describify</h1>
        </div>
    );
}

function MenuElements() {
    return (
        <div className="md:w-2/4 hidden md:flex items-center justify-center gap-3">
            <p>Home</p>
            <p>Services</p>
            <p>About</p>
            <p>Prices</p>
        </div>
    );
}

function AccessButton() {
    return (
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
    );
}

function MenuMobileButton({ onClick }: { onClick: () => void }) {

    return (
        <div className="w-min flex md:hidden items-center justify-end">
            <button
                onClick={onClick}
                type="button"
                className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="sr-only">menu icon</span>
            </button>
        </div>
    );
}

function MenuMobilePage({ onClick }: { onClick: () => void }) {
    return (
        <div className="w-full h-svh flex flex-col items-center justify-center fixed top-0 left-0 bg-red-500">
            <p className="text-2xl fixed top-5 right-5" onClick={onClick}>X</p>
            <p>Mobile menu</p>
        </div>
    );
}

function UserProfile() {
    return (
        <div className=" w-min md:w-1/4 flex justify-end">
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-10 h-10 rounded-full object-cover" src={Avatar} alt="user photo" />
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@describify.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Navbar() {

    const [isMenu, setMenu] = useState(false);
    const [isLogged, setLogged] = useState(false);

    const handleMenuOpen = () => {
        setMenu(!isMenu);
    }

    return (
        <div className="w-full h-[12svh] flex items-center justify-center bg-gray-300">
            <div className="w-[90%] md:w-[80%] flex items-center gap-3">
                <Logo />
                <MenuElements />
                {isLogged ? <UserProfile /> : <AccessButton />}
                <MenuMobileButton onClick={handleMenuOpen} />
                {isMenu ? <MenuMobilePage onClick={handleMenuOpen} /> : ''}
            </div>
        </div>
    )
}
