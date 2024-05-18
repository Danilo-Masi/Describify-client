import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Utilities
import { fadeInElement } from '../utilities/useAnimations';
import { useLanguage } from '../utilities/useLanguage';
//Data
import { standardPlanIt, premiumPlanIt } from '../data/card_details_it';
import { standardPlanEn, premiumPlanEn } from '../data/card_details_en';
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
  const language = useLanguage();

  const priceCardRef1 = useRef(null);
  const priceCardRef2 = useRef(null);

  useEffect(() => {
    //Reference
    const price1 = priceCardRef1.current || "";
    const price2 = priceCardRef2.current || "";
    //Avvio delle animazioni
    fadeInElement(price1, 0.5, 0.0);
    fadeInElement(price2, 0.5, 0.5);
  }, []);

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')}
        accessToken={accessToken}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className='w-full md:w-7/12 h-auto flex flex-col md:flex-row gap-12 mt-10'>
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={language === 'it' ? standardPlanIt : standardPlanEn} reference={priceCardRef1} />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={language === 'it' ? premiumPlanIt : premiumPlanEn} reference={priceCardRef2} />
      </div>
    </ContainerComponents>
  );
}
