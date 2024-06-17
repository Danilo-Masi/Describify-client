import { Dispatch, SetStateAction } from "react";
//Components
import ModalBase from "./ModalBase";

interface ModalHelpProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalHelp({ setPageSelected }: ModalHelpProps) {
    return (
        <ModalBase size="md" modalTitle="Aiuto" onClose={() => setPageSelected("Genera")}>
            <h1>ciao</h1>
        </ModalBase>
    );
}
