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
            <p className="text-xl font-semibold text-custom-textPrimary dark:text-dark-textPrimary text-balance">Reset password</p>
            <ContainerInput containerStyle="">
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
            <ContainerInput containerStyle="">
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