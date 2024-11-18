// React-router
import { Link } from "react-router-dom";
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { scrollToElement } from '../utilities/useAnimations';
// Assets
import logo from '../assets/images/logo.svg';
// Components
import { FooterCol } from './Layout';

export default function Footer() {

    // Componente per la traduzione
    const { t } = useTranslation();

    return (
        <div className="w-full flex items-center justify-center border-t border-custom-borderGray dark:border-dark-borderGray">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-10 py-20">
                {/* Logo e info */}
                <FooterCol mdItemsPosition='md:items-start'>
                    <div className='flex items-center gap-x-2'>
                        <img src={logo} className="w-full h-10" alt="Logo Describify"/>
                        <h2 className='text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>Describify</h2>
                    </div>
                    <p className='text-md font-light text-center md:text-left text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                        {t('footerDescrizione')}
                    </p>
                    <p className='text-md font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                        Made with &#9749; and &#127829; by
                        <span><a href='https://x.com/dmasiiii' target='_blank'> Danilo</a></span>
                    </p>
                </FooterCol>
                {/* Link di navigazione della pagina */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">Link</p>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Home")}>{t('linkHome')}</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Features")}>{t('linkFunzionalità')}</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Prices")}>{t('linkPrezzi')}</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Faqs")}>Faqs</Link>
                </FooterCol>
                {/* Link termini e condizioni */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">Terms & Conditions</p>
                    <Link to="/terms-and-conditions" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Terms & Conditions</Link>
                    <Link to="/privacy-policy" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Privacy policy</Link>
                    <Link to="/cookie-policy" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Cookies policy</Link>
                </FooterCol>
                {/* Link social media */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">Social</p>
                    <a target='_blank' rel='noopener noreferrer' href='https://x.com/describify' className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" title='Twitter link'>X (Twitter)</a>
                </FooterCol>
            </div>
        </div>
    );
}
