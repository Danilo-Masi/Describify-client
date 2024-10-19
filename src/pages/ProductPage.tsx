// React
import { useEffect, useState } from "react";
// React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ProductSideBar from "../components/ProductSideBar";
import Product from "../components/Product";
import ModalLogout from "../components/ModalLogout";
import ModalUsage from "../components/ModalUsage";
import ModalSettings from "../components/ModalSettings";
import ModalHelp from "../components/ModalHelp";
// Utilities
import { checkAuth } from "../utilities/useVerify";

const modalComponents: any = {
    Utilizzo: ModalUsage,
    Impostazioni: ModalSettings,
    Aiuto: ModalHelp,
    Signout: ModalLogout
};

export default function ProductPage() {

    const [pageSelected, setPageSelected] = useState("Genera");
    const ModalComponent = modalComponents[pageSelected];

    const navigate: NavigateFunction = useNavigate();

    // Effetto che verifica se l'utente è loggato prima di accedere alla piattaforma
    useEffect(() => {
        const verifyUser = async () => {
            const isAuthenticated = await checkAuth();
            if (!isAuthenticated) {
                toast.info('Effettua il login prima di accedere alla piattaforma', {
                    onClose: () => navigate('/signin'),
                });
            }
        };
        verifyUser();
    }, [navigate]);

    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-full h-auto md:h-[calc(100svh-2.5rem)] flex flex-col md:flex-row items-start justify-start gap-5">
                <ProductSideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                <Product />
                {ModalComponent && <ModalComponent setPageSelected={setPageSelected} />}
                {/* Componente per le notifiche */}
                <ToastContainer autoClose={1000} pauseOnHover={false} />
            </div>
        </div>
    );
}
