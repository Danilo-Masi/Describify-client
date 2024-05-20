//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { Link } from "react-router-dom";
//Utilities
import { scrollToElement } from '../utilities/useAnimations';
//Components
import { FooterCol } from './Layout';
import Logo from './Logo';

export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="w-full flex items-center justify-center border-t border-custom-borderGray dark:border-dark-borderGray">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-10 py-20">
                {/* Logo e link social */}
                <FooterCol mdWidth='md:w-2/5' mdItemsPosition='md:items-start'>
                    <Logo width='40' height='30'/>
                    <p className="max-w-md md:text-start text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray mt-2">
                        {t('footerCaption')}
                    </p>
                    <a
                        href="mailto:info@describify.it?subject=Hey!!%20👋"
                        title='link to send email to Describify'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex gap-x-2 font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </span>
                        info@describify.it
                    </a>
                </FooterCol>
                {/* Link di navigazione della pagina */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">Link</p>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Home")}>Home</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Features")}>{t('linkFeatures')}</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Prices")}>{t('linkPrices')}</Link>
                    <Link to="/" className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => scrollToElement("#Faqs")}>Faqs</Link>
                </FooterCol>
                {/* Social */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">Social</p>
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/describify' className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" title='Twitter link'>X (Twitter)</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.tiktok.com/@describify' className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" title='TikTok link'>TikTok</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/describify' className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" title='Instagram link'>Instagram</a>
                </FooterCol>
                {/* Terms & policy */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray mb-2">{t('footerTerms')}</p>
                    <Link to="/terms-conditions" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Terms & Conditions</Link>
                    <Link to="/privacy-policy" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Privacy policy</Link>
                    <Link to="/cookie-policy" className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor" onClick={() => scrollToElement("Start")}>Cookies policy</Link>
                </FooterCol>
            </div>
        </div>
    );
}
