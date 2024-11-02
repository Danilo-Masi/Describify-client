// I18Next
import { useTranslation } from 'react-i18next';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FaqsAccordition from "./FaqsAccordition";

export default function Faqs({ id }: { id: string; }) {

  // Componente per la traduzione
  const { t } = useTranslation();

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue={t('faqsBadge')}
        titleValue={t('faqsTitolo')}
        descriptionValue={t('faqsDescrizione')}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      {/* Faqs box */}
      <FaqsAccordition />
    </ContainerComponents>
  );
}
