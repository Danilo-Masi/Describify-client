// I18Next
import { useTranslation } from 'react-i18next';
// Components
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import CardPrototype from './CardPrototype';
//Assets
import uploadScreen from '../assets/images/upload_screen.png';
import formScreen from '../assets/images/form_screen.png';
import generatedScreen from '../assets/images/generated_screen.png';

export default function Features({ id }: { id: string; }) {

  // Component per la traduzione
  const { t } = useTranslation();

  return (
    <div className="w-[90%] h-auto flex flex-col items-center justify-start py-16 gap-y-5" id={id}>
      <Intestazione
        badgeValue={t('funzionalitàBadge').toUpperCase()}
        titleValue={t('funzionalitàTitolo')}
        descriptionValue={t('funzionalitàDescrizione')}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className="flex flex-col items-center gap-y-20 md:gap-y-32 mt-10">
        <FeaturesStep
          title={t('funzionalitàStep1Titolo')}
          description={t('funzionalitàStep1Descrizione')}
          component={<div className='w-full rounded-xl object-cover'><img src={uploadScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title={t('funzionalitàStep2Titolo')}
          description={t('funzionalitàStep2Descrizione')}
          component={<div className='w-full rounded-xl object-cover'><img src={formScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          title={t('funzionalitàStep3Titolo')}
          description={t('funzionalitàStep3Descrizione')}
          component={<div className='w-full rounded-xl object-cover'><img src={generatedScreen} className='rounded-xl' /></div>} />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title={t('funzionalitàStep4Titolo')}
          description={t('funzionalitàStep4Descrizione')}
          component={<CardPrototype />} />
      </div>
    </div>
  );
}
