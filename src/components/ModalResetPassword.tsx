import { useLocation } from 'react-router-dom';
//Components
import EmailResend from '../components/EmailResend';
import EmailUpdate from "./EmailUpdate";
import ModalBase from "./ModalBase";

interface ModalResetPasswordProps {
    onClose: () => void;
}

export default function ModalResetPassword({ onClose }: ModalResetPasswordProps) {

    const location = useLocation();
    const accessToken = new URLSearchParams(location.hash).get('#access_token');

    return (
        <ModalBase size="md" modalTitle="Reset password" onClose={onClose}>
            {accessToken ? (
                <EmailUpdate accessToken={accessToken} />
            ) : (
                <EmailResend />
            )}
        </ModalBase>
    );
}
