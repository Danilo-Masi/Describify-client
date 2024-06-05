import { useEffect, useState } from "react";
//Flowbite
import { Modal } from "flowbite-react";
//Components
import EmailResend from '../components/EmailResend';
import EmailUpdate from "./EmailUpdate";

interface ModalResetPasswordProps {
    onClose: () => void;
}

export default function ModalResetPassword({ onClose }: ModalResetPasswordProps) {

    const [emailUsed, setEmailUsed] = useState("");
    const [isUrlUpdate, setUrlUpdate] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        if (path.endsWith('signin')) {
            setUrlUpdate(false);
            console.log('lurl è falso');
        } else if (path.endsWith('profile-update')) {
            setUrlUpdate(true);
            console.log('lurl è vero');
        }
    }, []);

    return (
        <Modal
            show
            size="md"
            position="center"
            className="bg-dark-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg pb-10 font-inter">
                {isUrlUpdate ? <EmailUpdate emailUsed={emailUsed} /> : <EmailResend onClose={onClose} setEmailUsed={setEmailUsed} />}
            </Modal.Body>
        </Modal>
    );
}
