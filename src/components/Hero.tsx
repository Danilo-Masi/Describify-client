// React
import { Suspense} from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import Intestazione from "./Intestazione";
import WaitlistGadget from "./WaitlistGadget";
import GridBackground from './GridBackground';
import HeroVideoPlayer from './HeroVideoPlayer';

export default function Hero({ id }: { id: string; }) {

    // Componente per la traduzione
    const { t } = useTranslation();

    return (
        <GridBackground id={id}>
            <Intestazione
                titleValue={t('heroTitolo')}
                descriptionValue={t('heroDescrizione')}
                titleStyle="text-6xl md:text-8xl tracking-tighter"
                descriptionStyle="text-lg md:text-xl" />
            <WaitlistGadget />
            <Suspense fallback={<div >Loading...</div>}>
            <HeroVideoPlayer />
            </Suspense>
        </GridBackground>
    );
}
