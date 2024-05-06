//I18Next
import { useTranslation } from 'react-i18next';
//images
import hero from '../assets/images/hero.jpeg';
//Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';

interface HeroProps {
    id: string;
}

export default function Hero({ id }: HeroProps) {

    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleDimension='text-7xl'
                mdTitleDimension='md:text-8xl'
                descriptionDimension='text-xl'
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')} />
            <WaitlistGadget />
            <div className="w-full md:w-3/4 h-[80svh] bg-custom-elevation3 dark:bg-dark-elevation3 rounded-lg mt-5 z-10">
                <img src={hero} alt='presentation-image' />
            </div>
        </GridBackground>
    );
}
