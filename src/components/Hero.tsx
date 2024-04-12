//I18Next
import { useTranslation } from 'react-i18next';
//Images
import Screenshot from '../assets/images/ciao.png';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";

interface HeroProps {
    id: string;
    borderAnimation: boolean;
}

export default function Hero({ id, borderAnimation }: HeroProps) {

    const { t } = useTranslation();

    return (
        <ContainerComponents
            gap="gap-y-10"
            id={id}>
            <Intestazione
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')} />
            <WaitlistGadget borderAnimation={borderAnimation} />
            <div className="relative w-full md:w-3/4 h-min mt-5">
                <div className="absolute -inset-1 rounded-lg bg-dark-gradient dark:bg-custom-gradient blur-md" />
                <div className="relative flex w-full h-min items-center justify-center rounded-lg bg-custom-background dark:bg-dark-background border-1 border-custom-border dark:border-dark-border">
                    <img src={Screenshot} className="w-full rounded-lg" />
                </div>
            </div>
        </ContainerComponents>
    );
}
