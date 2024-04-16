//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FormCredit from "./FormCredit";

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
      <FormCredit />
    </ContainerComponents>
  )
}
