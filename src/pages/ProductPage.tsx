import { useEffect, useState } from "react";
// Utilities
import { isAuthenticated } from '../utilities/useVerify.tsx';
// React-router
import { NavigateFunction, useNavigate } from "react-router-dom";
// Components
import SideBar from "../components/SideBar";
import Product from "../components/Product";
import ModalLogout from "../components/ModalLogout";
import ModalUsage from "../components/ModalUsage";
import ModalSettings from "../components/ModalSettings";
import ModalHelp from "../components/ModalHelp";

const modalComponents: any = {
    Utilizzo: ModalUsage,
    Impostazioni: ModalSettings,
    Aiuto: ModalHelp,
    Signout: ModalLogout
};

export default function ProductPage() {

    const [pageSelected, setPageSelected] = useState("Genera");
    const ModalComponent = modalComponents[pageSelected];

    const isLogged = isAuthenticated();
    const navigate: NavigateFunction = useNavigate();

    // Funzione per verificare se l'utente non è loggato
    /*useEffect(() => {
        if (!isLogged) {
            alert('Utente senza permessi'); //MODIFICARE L'ALERT
            navigate('/');
        }
    }, [isLogged]);*/

    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-full h-auto md:h-[calc(100svh-2.5rem)] flex flex-col md:flex-row items-start justify-start gap-5">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                <Product setModalWaitListOpen={() => false} setAlertMessage={() => ""} setAlertOpen={() => false} />
                {ModalComponent && <ModalComponent setPageSelected={setPageSelected} />}
            </div>
        </div>
    );
}
