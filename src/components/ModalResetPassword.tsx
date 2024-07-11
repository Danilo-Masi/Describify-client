import { useEffect, useState } from "react";
//Components
import EmailResend from '../components/EmailResend';
import EmailUpdate from "./EmailUpdate";
import ModalBase from "./ModalBase";

interface ModalResetPasswordProps {
    onClose: () => void;
}

export default function ModalResetPassword({ onClose }: ModalResetPasswordProps) {

    const [emailUsed, setEmailUsed] = useState("");
    const [isResetEmailSend, setResetEmailSend] = useState(false);

    return (
        <ModalBase size="md" modalTitle="" onClose={onClose}>
            {isResetEmailSend
                ? <EmailUpdate emailUsed={emailUsed} />
                : <EmailResend setResetEmailSend={setResetEmailSend} />
            }
        </ModalBase>
    );
}
