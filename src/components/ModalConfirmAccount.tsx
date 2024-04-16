import { useState, useEffect } from "react";
//Supabase
import { supabase } from '../services/client.tsx';
//React-router
import { Link } from "react-router-dom";
//Flowbite
import { Modal } from "flowbite-react";

interface ModalConfirmAccountProps {
    emailUser: string;
}

export default function ModalConfirmAccount({ emailUser }: ModalConfirmAccountProps) {

    const [emailVerificated, setEmailVerificated] = useState(false);

    useEffect(() => {
        console.log('Verica email in corso...');
        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            const verificaEmail = session?.user?.email_confirmed_at != null;
            console.log("Verifica email: " + verificaEmail);
            setEmailVerificated(verificaEmail);
        });
        return () => authListener.subscription.unsubscribe();
    }, []);

    const handleResendEmail = async () => {
        console.log('Rinvia email di verifica a ' + emailUser);
    }

    return (
        <Modal show dismissible={false}>
            <Modal.Body>
                <div className="flex flex-wrap gap-5">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                        to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                        soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                    {!emailVerificated ?
                        <button
                            disabled
                            onClick={handleResendEmail}
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 disabled:bg-custom-accent">
                            Resend email
                        </button>
                        :
                        <Link to="/">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Email confirmed
                            </button>
                        </Link>
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}
