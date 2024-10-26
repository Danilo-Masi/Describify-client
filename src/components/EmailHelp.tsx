// React
import { useState } from "react";
// React-email
import { Html, Hr, Text, Heading } from "@react-email/components";

export default function EmailHelp({ text }: { text: string }) {

    const [emailUser, setEmailUser] = useState("ciao"); //DA PRELEVARE DAL DB

    return (
        <Html lang="it">
            <Heading as="h3">Email dell'utente che ha effettuato la richiesta: me.ciao</Heading>
            <Hr />
            <Text>{text}</Text>
        </Html>
    );
}
