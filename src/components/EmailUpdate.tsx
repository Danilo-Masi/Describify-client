import { useState } from "react";
//React router
import { NavigateFunction, useNavigate } from "react-router-dom";
//Components
import { ContainerInput } from "../components/Layout";

interface EmailUpdateProps {
    emailUsed: string;
}

export default function EmailUpdate({ emailUsed }: EmailUpdateProps) {

    const navigate: NavigateFunction = useNavigate();

    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    /*const handleResetPassword = async () => {
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
    }*/

    const handleResetPassword = () => {
        console.log('Reset password ciao');
    }

    return (
        <div className="w-full h-auto flex flex-wrap gap-y-6 gap-x-1">
            {/* Intestazione */}
            <p className="text-2xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Reset password</p>
            <p className="text-lg font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Reimposta la password del tuo account</p>
            {/* Input password */}
            <ContainerInput containerStyle="flex-col">
                <label htmlFor="input-signup-password" className="block mb-2 text-sm font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Reset password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-password"
                    name="input-signup-password"
                    className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    onChange={(event) => setPass(event.target.value)} />
            </ContainerInput>
            {/* Input conferma password */}
            <ContainerInput containerStyle="flex-col">
                <label htmlFor="input-signup-repet-password" className="block mb-2 text-sm font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Confirm password</label>
                <input
                    placeholder="•••••••••"
                    type="password"
                    id="input-signup-repet-password"
                    name="input-signup-repet-password"
                    className="w-full rounded-lg p-2.5 bg-custom-elevation2 dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                    required
                    onChange={(event) => setConfirmPass(event.target.value)} />
            </ContainerInput>
            {/* Bottone di "Reset Password" */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor"
                onClick={handleResetPassword}>
                Reset password
            </button>
        </div>
    );
}