import { Dispatch, SetStateAction } from "react";
//Cookie-consent
import { useCookies } from "react-cookie";
//Flowbite
import { Modal } from "flowbite-react";

interface ModalCookiesProps {
    setCookieModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ModalCookies({ setCookieModalOpen }: ModalCookiesProps) {

    const [cookies, setCookie] = useCookies(['userCookieConsent', 'name']);

    const handleAccept = () => {
        setCookie('userCookieConsent', 'true', { path: '/' });
        //Abilitare i cookie di terze parti //
        setCookieModalOpen(false);
    }

    const handleDecline = () => {
        setCookie('userCookieConsent', 'false', { path: '/' });
        // Disabilitare i cookie di terze parti //
        setCookieModalOpen(false);
    }

    return (
        <Modal
            show
            size="sm"
            position="bottom-left"
            className="bg-custom-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation2 dark:bg-dark-elevation2 rounded-lg">
                <div className="flex flex-wrap gap-4">
                    <p className="text-custom-textSecondary dark:text-dark-textSecondary text-balance">Utilizziamo cookie di terze parti per personalizzare i servizi e analizzare il traffico sulla piattaforma. Per ulteriori informazioni, clicca qui:
                        <span className="text-custom-accent dark:text-dark-accent font-medium">
                            <a href="#"> Cookies policy</a>
                        </span>
                    </p>
                    <button
                        onClick={handleAccept}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-dark-textPrimary bg-custom-accent dark:bg-dark-accent hover:bg-dark-borderFocus dark:hover:bg-dark-borderFocus font-medium rounded-lg text-sm px-5 py-2.5">
                        Accetta
                    </button>
                    <button
                        onClick={handleDecline}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-custom-textPrimary dark:text-dark-textPrimary bg-custom-background dark:bg-dark-elevation2 border border-custom-border dark:border-dark-border focus:outline-none hover:bg-custom-border dark:hover:bg-dark-border font-medium rounded-lg text-sm px-5 py-2.5">
                        Declina
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}