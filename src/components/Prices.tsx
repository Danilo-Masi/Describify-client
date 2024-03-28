//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import CardPrice from "./CardPrice";

interface PricesProps {
  id: string;
}

export default function Prices({ id }: PricesProps) {
  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue="Prices"
        titleValue="Choose the plan that fit better for you"
        descriptionValue="You can create easily and fast a complete description for your announce with the power of AI. What are you waiting for?Do it now. " />
      {/* Cards prices */}
      <div className="w-[90%] md:w-3/4 flex flex-col md:flex-row gap-10 md:gap-5">
        <CardPrice titlePlan="Free plan" pricePlan={0} />
        <CardPrice titlePlan="Standard plan" pricePlan={2} />
        <CardPrice titlePlan="Premium plan" pricePlan={5} />
      </div>
    </ContainerComponents>
  )
}
