import { useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import CardPrice from "./CardPrice";
//Data
import { freePlan, standardPlan, premiumPlan } from "../data/planOptions_en";
import { pianoFree, pianoStandard, pianoPremium } from '../data/planOptions_it';

interface PricesProps {
  id: string;
}

export default function Prices({ id }: PricesProps) {

  const { t } = useTranslation();
  const [currentPlan, setCurrentPlan] = useState("Free plan");
  const [currentLng, setCurrentLng] = useState("en");

  const aggiornaDomande = () => {
    const verificaLingua = localStorage.getItem("language") || "en";
    if (verificaLingua === "en") {
      setCurrentLng("en");
    } else {
      setCurrentLng("it");
    }
  }

  useState(() => {
    aggiornaDomande();
  }, []);

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')} />
      {/* Cards prices */}
      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-10 md:gap-5">
        <CardPrice titlePlan="Free plan" pricePlan={0} planOptions={currentLng === "en" ? freePlan : pianoFree} currentPlan={currentPlan} />
        <CardPrice titlePlan="Standard plan" pricePlan={2} planOptions={currentLng === "en" ? standardPlan : pianoStandard} currentPlan={currentPlan} />
        <CardPrice titlePlan="Premium plan" pricePlan={5} planOptions={currentLng === "en" ? premiumPlan : pianoPremium} currentPlan={currentPlan} />
      </div>
    </ContainerComponents>
  )
}
