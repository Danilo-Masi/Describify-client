//React-router
import { HashLink as Link } from 'react-router-hash-link';

interface FooterColProps {
    children: any;
    mdWidth: string;
    mdItemsPosition: string;
}

function FooterCol({ children, mdWidth, mdItemsPosition }: FooterColProps) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-2 ${mdWidth} ${mdItemsPosition}`}>
            {children}
        </div>
    );
}

const textTitle: string = "text-lg font-medium text-dark-textPrimary";
const textPharagraph: string = 'text-gray-300 font-light text-custom-textSecondary dark:text-dark-textSecondary';

export default function Footer() {
    return (
        <div className="w-full flex items-center justify-center bg-dark-background dark:bg-custom-textPrimary">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-10 py-20">
                {/* Logo */}
                <FooterCol mdWidth='md:w-2/5' mdItemsPosition='md:items-start'>
                    <p className={textTitle}>Describify</p>
                    <p className={`max-w-md md:text-start text-center font-light ${textPharagraph}`}>
                        The smarter way to sell. Harness the power of AI for listings that stand out and sell fast.
                    </p>
                </FooterCol>
                {/* Link */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className={textTitle}>Link</p>
                    <Link to="#Home" smooth className={textPharagraph}>Home</Link>
                    <Link to="#Features" smooth className={textPharagraph}>Features</Link>
                    <Link to="#Prices" smooth className={textPharagraph}>Prices</Link>
                    <Link to="#Faqs" smooth className={textPharagraph}>Faqs</Link>
                </FooterCol>
                {/* Company */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className={textTitle}>Link</p>
                    <p className={textPharagraph}>Terms conditions</p>
                    <p className={textPharagraph}>Privacy policy</p>
                    <p className={textPharagraph}>Cookies</p>
                </FooterCol>
                {/* Contatti */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className={textTitle}>Contatti</p>
                    <p className={textPharagraph}>Telefono: <span>+39 3425150935</span></p>
                    <p className={textPharagraph}>Email: <span>describify@info.com</span></p>
                </FooterCol>
            </div>
        </div>
    );
}
