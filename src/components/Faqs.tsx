//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FaqsAccordition from "./FaqsAccordition";

interface FaqsProps {
  id: string;
  accessToken: boolean;
}

export default function Faqs({ id, accessToken }: FaqsProps) {

  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        accessToken={accessToken}
        badgeValue="FAQs"
        titleValue={t('faqsTitle')}
        descriptionValue={t('faqsDescription')} />
      {/* Faqs box */}
      <FaqsAccordition />
    </ContainerComponents>
  );
}
