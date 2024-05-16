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
        badgeValue="FAQs"
        titleValue={t('faqsTitle')}
        descriptionValue={t('faqsDescription')}
        accessToken={accessToken}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      {/* Faqs box */}
      <FaqsAccordition />
    </ContainerComponents>
  );
}
