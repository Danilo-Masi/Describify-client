//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FaqsAccordition from "./FaqsAccordition";

interface FaqsProps {
  id: string;
}

export default function Faqs({ id }: FaqsProps) {
  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue="FAQs"
        titleValue="Have Questions?"
        descriptionValue="We’ve got answers. Discover how Descrify can change the way you sell online." />
        {/* Faqs box */}
        <FaqsAccordition />
    </ContainerComponents>
  );
}
