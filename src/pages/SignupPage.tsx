import { Dispatch, SetStateAction, useEffect, useState } from "react";
// Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SignupForm from "../components/SignupForm.tsx";
import ModalConfirmAccount from "../components/ModalConfirmAccount.tsx";

interface SignupPageProps {
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    setAlertColor: Dispatch<SetStateAction<string>>;
}

export default function SignupPage({ setAlertOpen, setAlertMessage, setAlertColor }: SignupPageProps) {

    const [emailPut, setEmailPut] = useState("");
    const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SignupForm
                setModalOpen={setIsModalEmailOpen}
                setEmailPut={setEmailPut}
                setAlertOpen={setAlertOpen}
                setAlertMessage={setAlertMessage}
                setAlertColor={setAlertColor} />
            <AccessBox />
            {isModalEmailOpen && <ModalConfirmAccount emailUser={emailPut} />}
        </Layout>
    );
}
