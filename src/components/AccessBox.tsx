//I18next
import { useTranslation } from 'react-i18next';
//Components
import { IconaLogo } from './SvgComponents';

export default function AccessBox() {

    const { t } = useTranslation();

    return (
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-start justify-center gap-y-5 px-6 md:px-20 py-10 md:py-0 bg-[#6D44CE]">
            <div className="w-full flex items-start justify-start gap-x-2">
                <IconaLogo width="30" height="30"/>
                <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
            </div>
            {/* BLOCCO IMMAGINI */}
            <div className="flex relative">
                <img className="w-10 h-10 rounded-full border border-white" src="./src/assets/images/pic1.png" alt="profile image1" />
                <img className="w-10 h-10 -ml-3 rounded-full border border-white" src="./src/assets/images/pic2.png" alt="profile image2" />
                <img className="w-10 h-10 -ml-3 rounded-full border border-white" src="./src/assets/images/pic3.png" alt="profile image3" />
                <img className="w-10 h-10 -ml-3 rounded-full border border-white" src="./src/assets/images/pic4.png" alt="profile image4" />
            </div>
            <h1 className="text-white text-5xl font-bold">{t('accessBoxTitle')}</h1>
            <p className="text-gray-200">{t('accessBoxCaption')}</p>
        </div>
    );
}
