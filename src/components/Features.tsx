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
//Images
import image1 from '../assets/images/Features_graphic_1.png';
import image2 from '../assets/images/features_graphic_2.png';

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
      <div className="flex flex-col items-center gap-20 mt-10">
        <FeaturesStep data={language === 'it' ? featuresDetailsIt1 : featuresDetailsEn1} imageUrl={image1}/>
        <FeaturesStep data={language === 'it' ? featuresDetailsIt2 : featuresDetailsEn2} imageUrl={image2} order1="md:order-2" order2="md:order-1" />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt3 : featuresDetailsEn3} imageUrl={image1}/>
        <FeaturesStep data={language === 'it' ? featuresDetailsIt4 : featuresDetailsEn4} imageUrl={image1}order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
