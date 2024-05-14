//I18Next
import { useTranslation } from 'react-i18next';
//Data
import { featuresDetailsIt1, featuresDetailsIt2, featuresDetailsIt3, featuresDetailsIt4 } from '../data/features_details_it';
import { featuresDetailsEn1, featuresDetailsEn2, featuresDetailsEn3, featuresDetailsEn4 } from '../data/features_details_en';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
//Utilities
import { useLanguage } from '../utilities/useLanguage';

interface FeaturesProps {
  id: string;
  accessToken: boolean;
}

export default function Features({ id, accessToken }: FeaturesProps) {

  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <ContainerComponents id={id}>
      <Intestazione
        accessToken={accessToken}
        badgeValue={t('featuresBadge').toUpperCase()}
        titleValue={t('featuresTitle')}
        descriptionValue={t('featuresDescription')} />
      <div className=" flex flex-col gap-10 mt-10">
        <FeaturesStep data={language === 'it' ? featuresDetailsIt1 : featuresDetailsEn1} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt2 : featuresDetailsEn2} order1="md:order-2" order2="md:order-1" />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt3 : featuresDetailsEn3} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt4 : featuresDetailsEn4} order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
