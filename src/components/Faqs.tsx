//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FaqsAccordition from "./FaqsAccordition";

interface FaqsProps {
  id: string;
}

export default function Faqs({ id }: FaqsProps) {

  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue="FAQs"
        titleValue={t('faqsTitle')}
        descriptionValue={t('faqsDescription')} />
      {/* Faqs box */}
      <FaqsAccordition />
    </ContainerComponents>
  );
}
