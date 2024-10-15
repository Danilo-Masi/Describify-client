// React
import { useState } from "react";
// React-email
import { Html, Hr, Text, Heading } from "@react-email/components";
// Utilities
import { useLanguage } from "../utilities/useLanguage";

interface EmailHelpProps {
    userText: string;
}

export default function EmailHelp({ userText }: EmailHelpProps) {

    const language = useLanguage();

    const [emailUser, setEmailUser] = useState("test@test.com"); //DA PRELEVARE DAL DB

    return (
        <Html lang={language || "en"}>
            <Heading as="h3">Email dell'utente che ha effettuato la richiesta: {emailUser}</Heading>
            <Hr />
            <Text>{userText}</Text>
        </Html>
    );
}
