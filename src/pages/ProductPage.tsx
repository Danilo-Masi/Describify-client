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
import ModalSettings from "../components/ModalSettings";
import ModalHelp from "../components/ModalHelp";
// Utilities
import { checkAuth, checkCredits } from "../utilities/useVerify";

const modalComponents: any = {
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

    // Stato per gestire il valore dei crediti disponibiliF
    const [creditiDisponibili, setCreditiDisponibili] = useState<null | any>(null);
    // Stato per aggiornare la ricerca dei crediti
    const [isCreditiUpdate, setCreditiUpdate] = useState(false);

    // Effetto per recuperare i crediti quando il componente viene montato
    useEffect(() => {
        const fetchCrediti = async () => {
            const crediti = await checkCredits();
            setCreditiDisponibili(crediti);
        }
        fetchCrediti();
    }, [isCreditiUpdate]);

    return (
        <div className="w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-between p-5 bg-custom-background dark:bg-dark-background">
            <ProductSideBar pageSelected={pageSelected} setPageSelected={setPageSelected} creditiDisponibili={creditiDisponibili} />
            <Product isCreditiUpdate={isCreditiUpdate} setCreditiUpdate={setCreditiUpdate} />
            {ModalComponent && <ModalComponent setPageSelected={setPageSelected} />}
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </div>
    );
}
