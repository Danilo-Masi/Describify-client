//I18Next
import { useTranslation } from 'react-i18next';
//Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";

interface HeroProps {
    id: string;
}

export default function Hero({ id }: HeroProps) {

    const { t } = useTranslation();

    return (
        <div id={id} className="w-[90%] h-auto flex flex-col items-center justify-start gap-y-10 py-16 dark:bg-dark-gradient">
                <Intestazione
                    titleDimension='text-7xl'
                    mdTitleDimension='md:text-8xl'
                    descriptionDimension='text-xl'
                    titleValue={t('heroTitle')}
                    descriptionValue={t('heroDescription')} />
                <WaitlistGadget />
                <div className="w-full md:w-3/4 h-[80svh] bg-custom-elevation3 dark:bg-dark-elevation3 rounded-lg mt-5"></div>
        </div>
    );
}
