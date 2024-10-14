import { useEffect, useState } from "react";
// React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
// Components
import SideBar from "../components/SideBar";
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

    useEffect(() => {
        const verifyUser = async () => {
            const isAuthenticated = await checkAuth();
            if (!isAuthenticated) {
                alert('Utente senza permessi');
                navigate('/signin');
            }
        };
        verifyUser();
    }, [navigate]);

    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-full h-auto md:h-[calc(100svh-2.5rem)] flex flex-col md:flex-row items-start justify-start gap-5">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                <Product setAlertMessage={() => ""} setAlertOpen={() => false} />
                {ModalComponent && <ModalComponent setPageSelected={setPageSelected} />}
            </div>
        </div>
    );
}
