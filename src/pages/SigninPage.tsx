import { Dispatch, SetStateAction } from "react";
// Components
import { Layout } from "../components/Layout";
import AccessBox from "../components/AccessBox";
import SigninForm from "../components/SigninForm.tsx";

interface SigninPageProps {
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    setAlertColor: Dispatch<SetStateAction<string>>;
}

export default function SigninPage({ setAlertOpen, setAlertMessage, setAlertColor }: SigninPageProps) {

    return (
        <Layout padding="p-0" mdFlexOrientation="md:flex-row" mdHeight="md:h-svh">
            <SigninForm
                setAlertOpen={setAlertOpen}
                setAlertMessage={setAlertMessage}
                setAlertColor={setAlertColor} />
            <AccessBox />
        </Layout>
    );
}
