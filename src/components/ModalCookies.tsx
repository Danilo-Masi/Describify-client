// React
import { Dispatch, SetStateAction } from "react";
// React-router
import { Link } from "react-router-dom";
// Flowbite-react
import { Modal } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';

export default function ModalCookies({ setCookieModalOpen }: { setCookieModalOpen: Dispatch<SetStateAction<boolean>>; }) {

    // Compoente per le traduzioni
    const { t } = useTranslation();

    // Funzione per settare nel localStorage l'apertura del banner
    const handleAccept = () => {
        localStorage.setItem('cookieBanner', 'showed');
        setCookieModalOpen(false);
    }

    return (
        <Modal
            show
            dismissible={false}
            size="md"
            position="bottom-left"
            className="bg-dark-background dark:bg-dark-background font-inter">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-lg">
                <div className="flex flex-wrap gap-4 font-poppins">
                    <p className="text-custom-textSecondaryGray dark:text-dark-textSecondaryGray text-clip font-light">
                        {t('modalCookieDescrizione')}
                        <span className="text-custom-solidColor dark:text-dark-solidColor">
                            <Link to="/cookie-policy"> Cookies policy</Link>
                        </span>
                    </p>
                    <button
                        onClick={handleAccept}
                        type="button"
                        className="w-full text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-semibold rounded-lg text-sm px-5 py-2.5">
                        {t('modalCookieBottone')}
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
