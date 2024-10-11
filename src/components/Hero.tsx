import React, { Dispatch, SetStateAction, Suspense } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
//Assets
import heroscreen from '../assets/images/hero_screen.png';
// Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';
const Product = React.lazy(() => import('./Product'));

interface HeroProps {
    id: string;
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function Hero({ id, setAlertOpen, setAlertMessage }: HeroProps) {

    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')}
                titleStyle="text-6xl md:text-8xl tracking-tighter"
                descriptionStyle="text-lg md:text-xl" />
            <WaitlistGadget setAlertOpen={setAlertOpen} setAlertMessage={setAlertMessage} />
            <Suspense fallback={<div >Loading...</div>}>
                <div className='w-full md:w-3/4 h-auto flex items-center justify-center rounded-xl object-cover border border-dark-borderColor'>
                    <img src={heroscreen} className='rounded-xl' />
                </div>
            </Suspense>
        </GridBackground>
    );
}
