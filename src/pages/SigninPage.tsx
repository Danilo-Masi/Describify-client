import { useState } from "react";
//Supabase
import { supabase } from '../services/client';
//Components
import AccessBox from "../components/AccessBox";
import Layout from "../components/Layout";
import ContainerInput from "../components/ContainerInput";

function SigninForm() {

    const [rememberCheckbox, setRememberCheckbox] = useState(false);
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        setSigninForm(prevState => ({
            ...prevState,
            [fieldName]: event.target.value
        }))
    }

    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Validazione dei dati //TODO
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: signinForm.email,
                password: signinForm.password,
            });
            if (error) {
                console.error("Error during signin:", error);
                alert('Error during signin: ' + error.message);
                return;
            } else {
                alert('Accesso effettutato corretamente');
            }
        } catch (error) {
            console.error("Error during signin:", error);
            alert('Error during signin');
        }
    }

    return (
        <form
            onSubmit={handleSignin}
            className="w-full md:w-1/2 h-[88svh] md:h-full flex flex-col gap-5 items-center justify-center px-6 md:px-32 bg-gray-100">
            <ContainerInput flexOrentation="flex-col">
                <h1 className="text-2xl font-bold">Welcome back</h1>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@decribify.com"
                    required
                    value={signinForm.email}
                    onChange={event => handleChange(event, 'email')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    value={signinForm.password}
                    onChange={event => handleChange(event, 'password')} />
            </ContainerInput>
            <ContainerInput flexOrentation="flex-row">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required
                        checked={rememberCheckbox}
                        onChange={() => setRememberCheckbox(!rememberCheckbox)} />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </ContainerInput>
            <ContainerInput flexOrentation="flex-col">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </ContainerInput>
        </form>
    );
}

export default function SigninPage() {
    return (
        <Layout padding="p-0">
            <SigninForm />
            <AccessBox />
        </Layout>
    )
}
