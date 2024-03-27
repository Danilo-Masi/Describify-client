//Components
import FeaturesStep from "./FeaturesStep";
import Intestazione from "./Intestazione";
import { ContainerComponents } from "./Layout";

interface FeaturesProps {
  id: string;
}

export default function Features({ id }: FeaturesProps) {
  return (
    <ContainerComponents id={id}>
      <Intestazione
        badgeValue="How does it work?"
        titleValue="A pratical and easy way for create your announce"
        descriptionValue="You can create easily and fast a complete description for your announce with the power of AI. What are you waiting for?Do it now. " />
      <div className="w-[90%] flex flex-wrap gap-10">
        <FeaturesStep />
        <FeaturesStep order1="md:order-2" order2="md:order-1" />
        <FeaturesStep />
        <FeaturesStep order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
