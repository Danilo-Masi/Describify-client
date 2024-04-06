import { Dispatch, SetStateAction, useEffect, useState } from "react";
//Flowbite
import { Modal } from "flowbite-react";
//Supabase
import { supabase } from '../services/client.tsx';
//React router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { ContainerInput } from "../components/Layout";

interface EmailResendProps {
    onClose: () => void;
    setEmailUsed: Dispatch<SetStateAction<string>>;
}

function EmailResend({ onClose, setEmailUsed }: EmailResendProps) {

    const [emailDigit, setEmailDigit] = useState("");
    const [disableButton, setDisabledButton] = useState(false);

    const handleResend = async () => {
        // Verifica email inserita //
        console.log('Resend email to... ' + emailDigit);
        try {
            let { data, error } = await supabase.auth.resetPasswordForEmail(emailDigit);
            console.log(data);
            setEmailUsed(emailDigit);
            setDisabledButton(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-auto flex flex-wrap gap-y-6 gap-x-1">
            <p className="text-xl font-semibold text-custom-textPrimary dark:text-dark-textPrimary text-balance">Forgot password?</p>
            <p className="text-md  text-custom-textSecondary dark:text-dark-textSecondary text-balance">No worries, we'll send you reset istruction</p>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-custom-textSecondary dark:text-dark-textSecondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </div>
                <input
                    required
                    type="email"
                    id="input-email-reset"
                    className="bg-custom-elevation dark:bg-dark-elevation border border-custom-border dark:border-dark-border text-custom-textPrimary dark:text-dark-textPrimary text-sm rounded-lg focus:ring-custom-accent dark:focus:ring-dark-accent focus:border-custom-accent dark:focus:border-dark-accent block w-full ps-10 p-2.5 dark:placeholder-gray-400"
                    placeholder="name@describify.com"
                    onChange={(event) => setEmailDigit(event.target.value)} />
            </div>
            <button
                onClick={onClose}
                type="button"
                className="w-[49%] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Cancel
            </button>
            <button
                disabled={disableButton}
                onClick={handleResend}
                type="button"
                className="w-[49%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Send
            </button>
        </div>
    );
}

interface EmailUpdateProps {
    emailUsed: string;
}

function EmailUpdate({ emailUsed }: EmailUpdateProps) {

    const navigate: NavigateFunction = useNavigate();

    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleResetPassword = async () => {
        // Convalida dei dati inseriti //
        console.log(emailUsed);
        if (pass !== "" && pass !== null && pass === confirmPass) {
            const { data, error } = await supabase.auth.updateUser({
                email: emailUsed,
                password: pass,
            });
            console.log(data);
            alert('pass modificata correttamente');
            navigate('/');
        } else {
            alert('Errore nell inserimento della password');
            return;
        }
    }

    return (
        <div className="w-full h-auto flex flex-wrap gap-y-6 gap-x-1">
            <p className="text-xl font-semibold text-custom-textPrimary dark:text-dark-textPrimary text-balance">Reset password</p>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="input-signup-password" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">Reset password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-password"
                    name="input-signup-password"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    required
                    onChange={(event) => setPass(event.target.value)} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="input-signup-repet-password" className="block mb-2 text-sm font-medium text-custom-textSecondary dark:text-dark-textSecondary">Confirm password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-repet-password"
                    name="input-signup-repet-password"
                    className="text-sm rounded-lg block w-full p-2.5 border bg-custom-elevation border-custom-border focus:border-custom-borderFocus text-custom-textPrimary dark:bg-dark-elevation dark:border-dark-border dark:focus:border-dark-borderFocus dark:text-dark-textPrimary"
                    required
                    onChange={(event) => setConfirmPass(event.target.value)} />
            </ContainerInput>
            <button
                onClick={handleResetPassword}
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Reset
            </button>
        </div>
    );
}

interface ModalResetPasswordProps {
    onClose: () => void;
}

export default function ModalResetPassword({ onClose }: ModalResetPasswordProps) {

    const [emailUsed, setEmailUsed] = useState("");
    const [isUrlUpdate, setIsUrlUpdate] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        if (path.endsWith('signin')) {
            setIsUrlUpdate(false);
            console.log('lurl è falso');
        } else if (path.endsWith('profile-update')) {
            setIsUrlUpdate(true);
            console.log('lurl è vero');
        }
    }, []);

    return (
        <Modal show size="sm" dismissible>
            <Modal.Body>
                {isUrlUpdate ? <EmailUpdate emailUsed={emailUsed} /> : <EmailResend onClose={onClose} setEmailUsed={setEmailUsed} />}
            </Modal.Body>
        </Modal>
    );
}
