import { Dispatch, SetStateAction } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Data
import { featuresDetailsIt1, featuresDetailsIt2, featuresDetailsIt3, featuresDetailsIt4 } from '../data/features_details_it';
import { featuresDetailsEn1, featuresDetailsEn2, featuresDetailsEn3, featuresDetailsEn4 } from '../data/features_details_en';
//Utilities
import { useLanguage } from '../utilities/useLanguage';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import ProductForm from './ProductForm';
import ProductTitle from './ProductTitle';
import ProductCaption from './ProductCaption';
import CardPrototype from './CardPrototype';

interface FeaturesProps {
  id: string;
  accessToken: boolean;
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Features({ id, accessToken, setModalWaitListOpen }: FeaturesProps) {

  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <ContainerComponents id={id}>
      <Intestazione
        badgeValue={t('featuresBadge').toUpperCase()}
        titleValue={t('featuresTitle')}
        descriptionValue={t('featuresDescription')}
        accessToken={accessToken}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className="flex flex-col items-center gap-y-20 md:gap-y-32 mt-10">
        <FeaturesStep
          data={language === 'it' ? featuresDetailsIt1 : featuresDetailsEn1}
          justifyPosition='justify-start'
          component={<ProductForm
            brandInputId="text brand input features"
            handleGeneration={() => setModalWaitListOpen(true)} />}
          arrow={true} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt2 : featuresDetailsEn2} justifyPosition='justify-center' component={<ProductCaption descriptionGenerated={t('featuresProductDescription')} descriptionPlaceholder='' />} order1="md:order-2" order2="md:order-1" />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt3 : featuresDetailsEn3} justifyPosition='justify-center' component={<ProductTitle titleGenerated={t('featuresProductTitle')} titlePlaceholder='' />} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt4 : featuresDetailsEn4} justifyPosition='justify-start' component={<CardPrototype />} sparkling={true} order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
