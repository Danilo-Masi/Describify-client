//I18Next
import { useTranslation } from 'react-i18next';
//Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';
import Product from './Product';

interface HeroProps {
    id: string;
}

export default function Hero({ id }: HeroProps) {

    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleDimension='text-6xl'
                mdTitleDimension='md:text-8xl'
                descriptionDimension='text-xl'
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')} />
            <WaitlistGadget />
            <Product />
        </GridBackground>
    );
}
