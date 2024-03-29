//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import CardPrice from "./CardPrice";
//Data
import { freePlan, standardPlan, premiumPlan } from "../data/planOptions";
import { useState } from "react";

interface PricesProps {
  id: string;
}

export default function Prices({ id }: PricesProps) {

  const [currentPlan, setCurrentPlan] = useState("Free plan");

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue="PRICES"
        titleValue="Maximize Your Listings, Minimize Your Effort"
        descriptionValue="Choose a Descrify plan that suits your needs. Our Free plan is great to get started, while our Standard and Premium plans offer advanced features for serious sellers. Sell more, effortlessly. " />
      {/* Cards prices */}
      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-10 md:gap-5">
        <CardPrice titlePlan="Free plan" pricePlan={0} planOptions={freePlan} currentPlan={currentPlan} />
        <CardPrice titlePlan="Standard plan" pricePlan={2} planOptions={standardPlan} currentPlan={currentPlan} />
        <CardPrice titlePlan="Premium plan" pricePlan={5} planOptions={premiumPlan} currentPlan={currentPlan} />
      </div>
    </ContainerComponents>
  )
}
