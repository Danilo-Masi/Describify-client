import { Dispatch, SetStateAction, useEffect, useState } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Data
import { freePlanIt, standardPlanIt, premiumPlanIt } from '../data/card_details_it';
import { freePlanEn, standardPlanEn, premiumPlanEn } from '../data/card_details_en';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import PriceCard from './PriceCard';


interface PricesProps {
  id: string;
  accessToken: boolean;
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Prices({ id, accessToken, setModalWaitListOpen }: PricesProps) {

  const { t } = useTranslation();

  const [verificaLingua, setVerificaLingua] = useState("");

  useEffect(() => {
    const language = localStorage.getItem('language') || "it";
    setVerificaLingua(language);
  }, [verificaLingua]);

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        accessToken={accessToken}
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')} />
      <div className='w-full md:w-4/5 h-auto flex flex-col md:flex-row gap-x-5 gap-y-12'>
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? freePlanIt : freePlanEn} />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? standardPlanIt : standardPlanEn} />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? premiumPlanIt : premiumPlanEn} />
      </div>
    </ContainerComponents>
  )
}
