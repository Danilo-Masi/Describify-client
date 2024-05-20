import React, { Dispatch, SetStateAction, Suspense } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';
const Product = React.lazy(() => import('./Product'));

interface HeroProps {
    id: string;
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hero({ id, setModalWaitListOpen }: HeroProps) {

    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleValue={t('heroTitle')}
                descriptionValue={t('heroDescription')}
                titleStyle="text-6xl md:text-8xl tracking-tighter"
                descriptionStyle="text-lg md:text-xl" />
            <WaitlistGadget />
            <Suspense fallback={<div >Loading...</div>}>
                <Product setModalWaitListOpen={setModalWaitListOpen} />
            </Suspense>
        </GridBackground>
    );
}
