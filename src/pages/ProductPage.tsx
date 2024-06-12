import { useState } from "react";
//Components
import SideBar from "../components/SideBar";
import Product from "../components/Product";

export default function ProductPage() {

    const [pageSelected, setPageSelected] = useState("Genera");

    return (
        <div className="w-full h-auto min-h-svh flex items-center justify-center p-5 bg-custom-background dark:bg-dark-background">
            <div className="w-full flex flex-col md:flex-row items-start justify-start gap-5">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                <Product setModalWaitListOpen={() => false} setAlertMessage={() => ""} setAlertOpen={() => false} />
            </div>
        </div>

    );
}
