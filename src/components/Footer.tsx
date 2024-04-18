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
                    <p className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Terms conditions</p>
                    <p className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Privacy policy</p>
                    <p className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Cookies</p>
                </FooterCol>
                {/* Contatti */}
                <FooterCol>
                    <p className="text-lg font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">{t('footerContacts')}</p>
                    <p className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Email:
                        <span className='font-medium text-custom-solidColor dark:text-dark-solidColor'> describify@info.com</span>
                    </p>
                </FooterCol>
            </div>
        </div>
    );
}
