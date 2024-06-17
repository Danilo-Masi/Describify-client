import { Dispatch, SetStateAction } from "react";
//Components
import ModalBase from "./ModalBase";

interface ModalUsageProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalUsage({ setPageSelected }: ModalUsageProps) {
    return (
        <ModalBase size="md" modalTitle="Utilizzo" onClose={() => setPageSelected("Genera")}>
            <h1>ciao</h1>
        </ModalBase>
    );
}
