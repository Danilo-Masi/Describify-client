//I18Next
import { useTranslation } from 'react-i18next';
//GSAP
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

interface FooterColProps {
    children: any;
    mdWidth?: string;
    mdItemsPosition?: string;
}

function FooterCol({ children, mdWidth, mdItemsPosition }: FooterColProps) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-2 ${mdWidth ? mdWidth : 'md:w-1/5'} ${mdItemsPosition ? mdItemsPosition : 'md:items-center'}`}>
            {children}
        </div>
    );
}

export default function Footer() {

    const { t } = useTranslation();

    const handleScroll = (divId: string) => {
        gsap.to(window, { duration: 1, scrollTo: { y: divId, offsetY: 50 } });
    }

    return (
        <div className="w-full flex items-center justify-center border-t border-custom-borderGray dark:border-dark-borderGray">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-10 py-20">
                {/* Logo */}
                <FooterCol mdWidth='md:w-2/5' mdItemsPosition='md:items-start'>
                    <p className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</p>
                    <p className="max-w-md md:text-start text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        {t('footerCaption')}
                    </p>
                    <div className='w-full flex items-start justify-start gap-x-3'>
                        <a href='https://www.instagram.com/describify' target='_blank' rel='noopener noreferrer'>
                            <svg className="w-6 h-6 text-custom-textPrimaryGray hover:text-custom-hoverGray dark:text-dark-textPrimaryGray hover:dark:text-dark-hoverGray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href='https://twitter.com/describify' target='_blank' rel='noopener noreferrer'>
                            <svg className="w-6 h-6 text-custom-textPrimaryGray hover:text-custom-hoverGray dark:text-dark-textPrimaryGray hover:dark:text-dark-hoverGray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href='https://github.com/Danilo-Masi/Decribify' target='_blank' rel='noopener noreferrer'>
                            <svg className="w-6 h-6 text-custom-textPrimaryGray hover:text-custom-hoverGray dark:text-dark-textPrimaryGray hover:dark:text-dark-hoverGray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </FooterCol>
                {/* Link */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Link</p>
                    <p className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => handleScroll("#Home")}>Home</p>
                    <p className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => handleScroll("#Features")}>Features</p>
                    <p className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => handleScroll("#Prices")}>Prices</p>
                    <p className={`text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-solidColor dark:hover:text-dark-solidColor font-light cursor-pointer`} onClick={() => handleScroll("#Faqs")}>Faqs</p>
                </FooterCol>
                {/* Company */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('footerTerms')}</p>
                    <p className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Terms conditions</p>
                    <p className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Privacy policy</p>
                    <p className="cursor-pointer text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Cookies</p>
                </FooterCol>
                {/* Contatti */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('footerContacts')}</p>
                    <a href="mailto:info@describify.it?subject=Oggetto%20della%20mail" target='_blank' rel='noopener noreferrer' className='text-center font-light text-custom-solidColor dark:text-dark-solidColor'>info@describify.it</a>
                </FooterCol>
            </div>
        </div>
    );
}
