//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";

interface FeaturesProps {
  id: string;
}

export default function Features({ id }: FeaturesProps) {

  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
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
