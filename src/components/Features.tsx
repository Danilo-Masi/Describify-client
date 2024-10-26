// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useLanguage } from '../utilities/useLanguage';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import CardPrototype from './CardPrototype';
// Data
import { featuresDetailsIt1, featuresDetailsIt2, featuresDetailsIt3, featuresDetailsIt4 } from '../data/features_details_it';
import { featuresDetailsEn1, featuresDetailsEn2, featuresDetailsEn3, featuresDetailsEn4 } from '../data/features_details_en';
//Assets
import uploadScreen from '../assets/images/upload_screen.png';
import formScreen from '../assets/images/form_screen.png';
import generatedScreen from '../assets/images/generated_screen.png';

export default function Features({ id }: { id: string; }) {

  const { t } = useTranslation();
  const language = useLanguage();

  return (
      <ContainerComponents id={id}>
        <Intestazione
          badgeValue={t('featuresBadge').toUpperCase()}
          titleValue={t('featuresTitle')}
          descriptionValue={t('featuresDescription')}
          titleStyle="text-5xl md:text-6xl"
          descriptionStyle="text-lg" />
        <div className="flex flex-col items-center gap-y-20 md:gap-y-32 mt-10">
          <FeaturesStep
            data={language === 'it' ? featuresDetailsIt1 : featuresDetailsEn1}
            justifyPosition='justify-start'
            component={<div className='w-full rounded-xl object-cover'><img src={uploadScreen} className='rounded-xl' /></div>}
            arrow={true} />
          <FeaturesStep
            data={language === 'it' ? featuresDetailsIt2 : featuresDetailsEn2}
            justifyPosition='justify-center'
            component={<div className='w-full rounded-xl object-cover'><img src={formScreen} className='rounded-xl' /></div>}
            order1="md:order-2"
            order2="md:order-1" />
          <FeaturesStep
            data={language === 'it' ? featuresDetailsIt3 : featuresDetailsEn3}
            justifyPosition='justify-center'
            component={<div className='w-full rounded-xl object-cover'><img src={generatedScreen} className='rounded-xl' /></div>} />
          <FeaturesStep
            data={language === 'it' ? featuresDetailsIt4 : featuresDetailsEn4}
            justifyPosition='justify-start' component={<CardPrototype />}
            sparkling={true}
            order1="md:order-2"
            order2="md:order-1" />
        </div>
      </ContainerComponents>
  );
}
