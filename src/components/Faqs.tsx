//Components
import FaqsAccordition from "./FaqsAccordition";
import Intestazione from "./Intestazione";
import { ContainerComponents } from "./Layout";

interface FaqsProps {
  id: string;
}

export default function Faqs({ id }: FaqsProps) {
  return (
    <ContainerComponents id={id}>
      <Intestazione
        badgeValue="Faq's"
        titleValue="There are sometinngh that it's not clear?"
        descriptionValue="You can create easily and fast a complete description for your announce with the power of AI. What are you waiting for?Do it now. " />
        <FaqsAccordition />
    </ContainerComponents>
  );
}
