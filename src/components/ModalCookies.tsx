import { Dispatch, SetStateAction } from "react";
//React-router
import { Link } from "react-router-dom";
//I18Next
import { useTranslation } from 'react-i18next';
//Cookie-consent
import { useCookies } from "react-cookie";
//Flowbite
import { Modal } from "flowbite-react";

interface ModalCookiesProps {
    setCookieModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ModalCookies({ setCookieModalOpen }: ModalCookiesProps) {

    const { t } = useTranslation();

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
            dismissible={false}
            size="sm"
            position="bottom-left"
            className="bg-dark-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg">
                <div className="flex flex-wrap gap-4 font-poppins">
                    <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-balance font-light">
                        {t('modalCookieText')}
                        <span className="text-custom-solidColor dark:text-dark-solidColor">
                            <Link to="/cookie-policy"> Cookies policy</Link>
                        </span>
                    </p>
                    <button
                        onClick={handleAccept}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-semibold rounded-lg text-sm px-5 py-2.5">
                        {t('modalCookieButtonAccept')}
                    </button>
                    <button
                        onClick={handleDecline}
                        type="button"
                        className="w-full md:w-[calc(50%-0.5rem)] text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:text-dark-textPrimaryGray bg-custom-elevation dark:bg-dark-elevation2 border border-custom-borderGray dark:border-dark-borderGray focus:outline-none hover:bg-custom-hoverGray dark:hover:bg-dark-hoverGray font-semibold rounded-lg text-sm px-5 py-2.5">
                        {t('modalCookieButtonDecline')}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
