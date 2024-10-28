// React
import { Suspense } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';
//Assets
import heroVideo from '../assets/images/hero_video.mp4';

export default function Hero({ id }: { id: string; }) {

    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleValue="Meno stress Più vendite"
                descriptionValue="Velocizza la creazione di annunci e incrementa le tue vendite su Vinted, Ebay, Subito e Wallapop"
                titleStyle="text-6xl md:text-8xl tracking-tighter"
                descriptionStyle="text-lg md:text-xl" />
            <WaitlistGadget />
            <Suspense fallback={<div >Loading...</div>}>
                <div className='w-full md:w-3/4 h-auto flex items-center justify-center rounded-xl object-cover border border-dark-borderColor'>
                    <video src={heroVideo} autoPlay loop muted className='rounded-2xl' />
                </div>
            </Suspense>
        </GridBackground>
    );
}
