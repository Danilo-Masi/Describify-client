//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";

interface FeaturesProps {
  id: string;
  accessToken: boolean;
}

export default function Features({ id , accessToken}: FeaturesProps) {

  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        accessToken={accessToken}
        badgeValue={t('featuresBadge').toUpperCase()}
        titleValue={t('featuresTitle')}
        descriptionValue={t('featuresDescription')} />
      {/* Features step */}
      <div className=" flex flex-wrap gap-10">
        <FeaturesStep />
        <FeaturesStep order1="md:order-2" order2="md:order-1" />
        <FeaturesStep />
        <FeaturesStep order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
