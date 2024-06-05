import { useState } from "react";
//Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SigninForm from "../components/SigninForm.tsx";
import ModalResetPassword from "../components/ModalResetPassword.tsx";

export default function SigninPage() {

    //**** Verificare che l'utente non sia già loggato ****//

    const [isModalResetPassword, setModalResetPassword] = useState(false);

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm setModalResetPassword={setModalResetPassword} />
            <AccessBox />
            {isModalResetPassword && <ModalResetPassword onClose={() => setModalResetPassword(false)} />}
        </Layout>
    )
}
