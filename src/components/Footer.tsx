import { HashLink as Link } from 'react-router-hash-link';

interface FooterColProps {
    children: any;
}

function FooterCol({ children }: FooterColProps) {
    return (
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center gap-1">
            {children}
        </div>
    );
}

export default function Footer() {
    return (
        <div className="w-full flex items-center justify-center bg-slate-700 text-white">
            <div className="w-[90%] h-auto flex-wrap flex flex-col md:flex-row items-start justify-start gap-y-5 py-5">
                {/* Logo */}
                <FooterCol>
                    <p className="text-2xl font-medium">Describify</p>
                    <p>Our platfarom offer a wide range og tools and faetaudbajsbjsbdj shbsjbd dbdajdbsadb asd adsbuads  dasubdsd dsj</p>
                </FooterCol>
                {/* Link */}
                <FooterCol>
                    <p className="text-lg font-medium">Link</p>
                    <Link to="#Home" smooth>Home</Link>
                    <Link to="#Features" smooth>Features</Link>
                    <Link to="#Prices" smooth>Prices</Link>
                    <Link to="#Faqs" smooth>Faqs</Link>
                </FooterCol>
                {/* Company */}
                <FooterCol>
                    <p className="text-lg font-medium">Link</p>
                    <p>Terms conditions</p>
                    <p>Privacy policy</p>
                    <p>Cookies</p>
                </FooterCol>
                {/* Contatti */}
                <FooterCol>
                    <p className="text-lg font-medium">Contatti</p>
                    <p>Telefono: <span>+39 3425150935</span></p>
                    <p>Email: <span>describify@info.com</span></p>
                </FooterCol>
            </div>
        </div>
    );
}
