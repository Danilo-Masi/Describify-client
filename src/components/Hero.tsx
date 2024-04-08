//React-router
import { Link } from "react-router-dom";
//Flowbite
import { Button } from "flowbite-react";
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
}

export default function Hero({ id }: HeroProps) {

    const { t } = useTranslation();

    return (
        <ContainerComponents
            gap="gap-y-10"
            id={id}>
            <Intestazione
                badgeValue={t('heroBadge').toUpperCase()}
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')} />
            <WaitlistGadget />
            <div className="relative w-full md:w-3/4 h-min">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-700 to-blue-500 blur-md" />
                <div className="relative flex w-full h-min items-center justify-center rounded-lg bg-custom-background dark:bg-dark-background border-1 border-custom-border dark:border-dark-border">
                    <img src={Screenshot} className="w-full rounded-lg" />
                </div>
            </div>
        </ContainerComponents>
    );
}
