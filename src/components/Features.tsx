// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useLanguage } from '../utilities/useLanguage';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import CardPrototype from './CardPrototype';
//Assets
import uploadScreen from '../assets/images/upload_screen.png';
import formScreen from '../assets/images/form_screen.png';
import generatedScreen from '../assets/images/generated_screen.png';

export default function Features({ id }: { id: string; }) {

  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className="w-[90%] h-auto flex flex-col items-center justify-start py-16 gap-y-5" id={id}>
      <Intestazione
        badgeValue={t('featuresBadge').toUpperCase()}
        titleValue="Risparmia tempo e aumenta le vendite"
        descriptionValue="Describify crea per te annunci ottimizzati, così puoi concentrarti su ciò che conta davvero: vendere di più"
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className="flex flex-col items-center gap-y-20 md:gap-y-32 mt-10">
        <FeaturesStep
          title="Carica l'immagine del tuo prodotto"
          description="Scegli un’immagine chiara e dettagliata per risultati ottimali"
          component={<div className='w-full rounded-xl object-cover'><img src={uploadScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title="Dettagli generati in automatico"
          description="Descrify riconosce e compila automaticamente i dettagli del tuo prodotto, sempre modificabili per una personalizzazione completa"
          component={<div className='w-full rounded-xl object-cover'><img src={formScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          title="Annuncio pronto in pochi secondi"
          description="Descrify ha creato l’annuncio per te in un istante, risparmiandoti tempo e fatica"
          component={<div className='w-full rounded-xl object-cover'><img src={generatedScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title="Vendi ed gudagna"
          description="Carica l’annuncio sulla tua piattaforma di vendita preferita e inizia subito a incassare"
          component={<CardPrototype />} />
      </div>
    </div>
  );
}
