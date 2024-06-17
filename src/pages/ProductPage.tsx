import { useState } from "react";
//Components
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

    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-full flex flex-col md:flex-row items-start justify-start gap-5">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                <Product setModalWaitListOpen={() => false} setAlertMessage={() => ""} setAlertOpen={() => false} />
                {ModalComponent && <ModalComponent setPageSelected={setPageSelected} />}
            </div>
        </div>
    );
}
