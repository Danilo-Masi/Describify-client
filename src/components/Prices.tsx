//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import PriceCard from './PriceCard';

interface PricesProps {
  id: string;
  accessToken: boolean;
}

export default function Prices({ id, accessToken }: PricesProps) {

  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        accessToken={accessToken}
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')} />
      <div className='w-full md:w-4/5 h-auto flex flex-col md:flex-row gap-5'>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </ContainerComponents>
  )
}
