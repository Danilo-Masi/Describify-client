import { HashLink as Link } from 'react-router-hash-link';

interface FooterColProps {
    children: any;
    mdWidth: string;
    mdItemsPosition: string;
}

function FooterCol({ children, mdWidth, mdItemsPosition }: FooterColProps) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-1 ${mdWidth} ${mdItemsPosition}`}>
            {children}
        </div>
    );
}

const textStyle: string = 'text-gray-300 font-light';

export default function Footer() {
    return (
        <div className="w-full flex items-center justify-center bg-slate-700 text-white">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-10 py-20">
                {/* Logo */}
                <FooterCol mdWidth='md:w-2/5' mdItemsPosition='md:items-start'>
                    <p className="text-2xl font-medium">Describify</p>
                    <p className='max-w-md md:text-start text-center text-gray-200 font-light'>
                        Our platfarom offer a wide range og tools and faetaudbajsbjsbdj shbsjbd dbdajdbsadb asd adsbuads  dasubdsd dsj
                    </p>
                </FooterCol>
                {/* Link */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className="text-lg font-medium">Link</p>
                    <Link to="#Home" smooth className={textStyle}>Home</Link>
                    <Link to="#Features" smooth className={textStyle}>Features</Link>
                    <Link to="#Prices" smooth className={textStyle}>Prices</Link>
                    <Link to="#Faqs" smooth className={textStyle}>Faqs</Link>
                </FooterCol>
                {/* Company */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className="text-lg font-medium">Link</p>
                    <p className={textStyle}>Terms conditions</p>
                    <p className={textStyle}>Privacy policy</p>
                    <p className={textStyle}>Cookies</p>
                </FooterCol>
                {/* Contatti */}
                <FooterCol mdWidth='md:w-1/5' mdItemsPosition='md:items-center'>
                    <p className="text-lg font-medium">Contatti</p>
                    <p className={textStyle}>Telefono: <span>+39 3425150935</span></p>
                    <p className={textStyle}>Email: <span>describify@info.com</span></p>
                </FooterCol>
            </div>
        </div>
    );
}
