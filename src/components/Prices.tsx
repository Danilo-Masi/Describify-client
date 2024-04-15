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
  accessToken: boolean;
}

export default function Prices({ id, accessToken }: PricesProps) {

  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState(40);
  const [currentLng, setCurrentLng] = useState("it");

  useState(() => {
    const verificaLingua = localStorage.getItem("language") || "it";
    if (verificaLingua === "en") {
      setCurrentLng("en");
    } else {
      setCurrentLng("it");
    }
  });

  const handleValueChange = (event: any) => {
    const euroInseriti = event.target.value;
    const numeroCrediti = euroInseriti / 0.5;
    setCurrentValue(numeroCrediti);
  }

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        accessToken={accessToken}
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')} />

      {/* Form prices */}
      <div className="w-full md:w-3/4  flex flex-col md:flex-row gap-5 rounded-md bg-custom-elevation dark:bg-dark-elevation border border-custom-border dark:border-dark-border p-5">
        {/* Blocco Input */}
        <div className=" w-full md:w-1/2 h-1/2 md:h-full flex flex-wrap items-start justify-center p-5 gap-6 order-2 md:order-1 bg-custom-elevation2 dark:bg-dark-elevation2 rounded-lg">
          <div className="w-full md:w-[calc(50%-0.75rem)]">
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">Euros</label>
            <input
              type="number"
              id="visitors"
              className="bg-dark-elevation2 dark:bg-dark-elevation2 border border-custom-border dark:border-dark-border text-custom-textPrimary dark:text-dark-textPrimary text-sm rounded-lg focus:ring-custom-borderRing dark:ring-dark-borderRing focus:border-custom-borderFocus dark:focus:border-dark-borderFocus block w-full p-2.5  dark:placeholder:text-dark-textSecondary placeholder:text-custom-textSecondary"
              placeholder="20"
              required
              onChange={handleValueChange} />
          </div>
          <div className="w-full md:w-[calc(50%-0.75rem)]">
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">Credits</label>
            <input
              disabled
              type="number"
              id="visitors"
              className="bg-custom-border dark:bg-dark-border text-custom-textPrimary dark:text-dark-textPrimary text-sm rounded-lg block w-full p-2.5 border-none"
              value={currentValue}
              required />
          </div>
          <p className="w-full text-balance text-custom-textSecondary dark:text-dark-textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit nulla pellentesque tortor fermentum vehicula. Duis in risus enim. Cras.
          </p>
          <button
            type="button"
            className="w-full text-dark-textPrimary bg-custom-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-custom-accent font-medium rounded-lg text-sm px-5 py-2.5">
            Continua
          </button>
        </div>
        {/* Blocco grafico*/}
        <div className=" w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-start justify-center p-5 gap-3 order-2 md:order-1 bg-green-500">

        </div>
      </div>
    </ContainerComponents>
  )
}
