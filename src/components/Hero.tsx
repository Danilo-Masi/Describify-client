//React-router
import { Link } from "react-router-dom";
//Flowbite
import { Button } from "flowbite-react";
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";


interface HeroProps {
    id: string;
}

export default function Hero({ id }: HeroProps) {

    const { t } = useTranslation();

    return (
        <ContainerComponents gap="gap-y-10" id={id}>
            <Intestazione
                badgeValue={t('heroBadge').toUpperCase()}
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')} />
            <Link to="/signin">
                <Button color="blue" className=" bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent text-dark-textPrimary">
                    Get started
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
            </Link>
            <div className="w-full md:w-4/5 h-[60svh] md:h-[80svh] flex items-center justify-center rounded-xl bg-gray-900 ">

            </div>
        </ContainerComponents>
    );
}
