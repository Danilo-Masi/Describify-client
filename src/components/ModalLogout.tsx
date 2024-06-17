import { Dispatch, SetStateAction } from "react";
//Flowbite
import { Button } from "flowbite-react";
//Components
import ModalBase from "./ModalBase";

interface ModalLogoutProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalLogout({ setPageSelected }: ModalLogoutProps) {

    const handleSingout = () => {
        console.log("Esci dall'applicazione");
    }

    return (
        <ModalBase size="sm" modalTitle="" onClose={() => setPageSelected("Genera")}>
            <div className="flex flex-col items-center justify-center gap-y-5 text-center text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                <h1 className="text-2xl font-bold">Sei sicuro?</h1>
                <p className="text-md font-normal text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    Se clicci accetta effettuerai il logout dall'app e quandro vorrai accedere di nuovo dovrai reinserire la password
                </p>
                <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => handleSingout()}>
                        Si, sono sicuro
                    </Button>
                    <Button color="gray" onClick={() => setPageSelected("Genera")}>
                        No, cancella
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
}
