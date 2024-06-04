import { useState } from "react";
//Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SignupForm from "../components/SignupForm.tsx";
import ModalConfirmAccount from "../components/ModalConfirmAccount.tsx";

export default function SignupPage() {

    //**** Verificare che l'utente non sia già loggato ****//

    const [emailPut, setEmailPut] = useState("");
    const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm setModalOpen={setIsModalEmailOpen} setEmailPut={setEmailPut} />
            <AccessBox />
            {isModalEmailOpen && <ModalConfirmAccount emailUser={emailPut} />}
        </Layout>
    );
}
