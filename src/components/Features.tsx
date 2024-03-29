//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";

interface FeaturesProps {
  id: string;
}

export default function Features({ id }: FeaturesProps) {
  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue="HOW DOES IT WORK?"
        titleValue="Effortless Selling Starts Here"
        descriptionValue="With Descrify, you’re just a few clicks away from the perfect product description. Our AI analyzes your item’s details and crafts descriptions designed to sell. No more writing stress - spend your time where it counts " />
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
