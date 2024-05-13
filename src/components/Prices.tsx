import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Utilities
import { handleFade } from '../utilities/animations';
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

  const priceCardRef1 = useRef(null);
  const priceCardRef2 = useRef(null);
  const priceCardRef3 = useRef(null);

  const [verificaLingua, setVerificaLingua] = useState("");

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language !== null) {
      setVerificaLingua(language);
    } else {
      const languageDefault = localStorage.getItem('i18nextLng') || 'it';
      setVerificaLingua(languageDefault);
    }
    //Reference
    const price1 = priceCardRef1.current || "";
    const price2 = priceCardRef2.current || "";
    const price3 = priceCardRef3.current || "";
    //Avvio delle animazioni
    handleFade(price1, 1.0, 0.0);
    handleFade(price2, 1.0, 0.5);
    handleFade(price3, 1.0, 1.0);
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
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? freePlanIt : freePlanEn} reference={priceCardRef1} />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? standardPlanIt : standardPlanEn} reference={priceCardRef2} />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={verificaLingua === 'it' ? premiumPlanIt : premiumPlanEn} reference={priceCardRef3} />
      </div>
    </ContainerComponents>
  );
}
