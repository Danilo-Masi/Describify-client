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
            className="bg-dark-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg">
                <div className="flex flex-wrap gap-4">
                    <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance">Utilizziamo cookie di terze parti per personalizzare i servizi e analizzare il traffico sulla piattaforma. Per ulteriori informazioni, leggi
                        <span className="text-custom-solidColor dark:text-dark-solidColor font-medium">
                            <a href="#"> Cookies policy</a>
                        </span>
                    </p>
                    <button
                        onClick={handleAccept}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5">
                        Accetta
                    </button>
                    <button
                        onClick={handleDecline}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-dark-textPrimaryGray bg-custom-elevation dark:bg-dark-elevation border border-custom-borderGray dark:border-dark-borderGray focus:outline-none hover:bg-custom-hoverGray dark:hover:bg-dark-hoverGray font-medium rounded-lg text-sm px-5 py-2.5">
                        Declina
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
