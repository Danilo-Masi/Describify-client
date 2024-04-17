//I18Next
import { useTranslation } from 'react-i18next';
//React-router
import { HashLink as Link } from 'react-router-hash-link';

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
                    <Link to="#Home" smooth className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Home</Link>
                    <Link to="#Features" smooth className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Features</Link>
                    <Link to="#Prices" smooth className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Prices</Link>
                    <Link to="#Faqs" smooth className="text-center text-balance font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray hover:text-custom-hoverColor dark:hover:text-dark-hoverColor">Faqs</Link>
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
