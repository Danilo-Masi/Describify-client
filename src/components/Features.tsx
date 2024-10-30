// I18Next
import { useTranslation } from 'react-i18next';
// Components
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import ToyImageComponent from './ToyImageComponent';
import ToyFormComponent from './ToyFormComponent';
import ToyResultComponent from './ToyResultComponent';
import ToyCardComponent from './ToyCardComponent';

export default function Features({ id }: { id: string; }) {

  // Component per la traduzione
  const { t } = useTranslation();

  return (
    <div className="w-[90%] h-auto flex flex-col items-center justify-start py-20" id={id}>
      <Intestazione
        badgeValue={t('funzionalitàBadge').toUpperCase()}
        titleValue={t('funzionalitàTitolo')}
        descriptionValue={t('funzionalitàDescrizione')}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className="flex flex-col items-center gap-y-20 mt-20">
        <FeaturesStep
          title={t('funzionalitàStep1Titolo')}
          description={t('funzionalitàStep1Descrizione')}
          component={
            <div className='w-full h-[60svh] flex items-center justify-center p-3 rounded-xl bg-custom-elevation4 dark:bg-dark-elevation4'>
              <ToyImageComponent />
            </div>
          } />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title={t('funzionalitàStep2Titolo')}
          description={t('funzionalitàStep2Descrizione')}
          component={
            <div className='w-full h-auto min-h-[60svh] flex items-center justify-center p-3 rounded-xl bg-custom-elevation4 dark:bg-dark-elevation4'>
              <ToyFormComponent />
            </div>
          } />
        <FeaturesStep
          title={t('funzionalitàStep3Titolo')}
          description={t('funzionalitàStep3Descrizione')}
          component={
            <div className='w-full h-auto min-h-[60svh] flex items-center justify-center p-3 rounded-xl bg-custom-elevation4 dark:bg-dark-elevation4'>
              <ToyResultComponent />
            </div>
          } />
        <FeaturesStep
          order1="md:order-2"
          order2="md:order-1"
          title={t('funzionalitàStep4Titolo')}
          description={t('funzionalitàStep4Descrizione')}
          component={<ToyCardComponent />} />
      </div>
    </div>
  );
}
