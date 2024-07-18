import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
import { useLanguage } from '../utilities/useLanguage';
// Data
import { standardPlanIt, premiumPlanIt } from '../data/card_details_it';
import { standardPlanEn, premiumPlanEn } from '../data/card_details_en';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import PriceCard from './PriceCard';
import SwitchButton from './SwitchButton';

interface PricesProps {
  id: string;
  accessToken: boolean;
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Prices({ id, accessToken, setModalWaitListOpen }: PricesProps) {

  const [isYearly, setYearly] = useState(true);
  const [standardPrice, setStandardPrice] = useState("");
  const [premiumPrice, setPremiumPrice] = useState("");

  const { t } = useTranslation();
  const language = useLanguage();

  const priceCardRef1 = useRef(null);
  const priceCardRef2 = useRef(null);

  useEffect(() => {
    // Reference delle animazioni
    const price1 = priceCardRef1.current || "";
    const price2 = priceCardRef2.current || "";
    // Avvio delle animazioni
    fadeInElement(price1, 0.5, 0.0);
    fadeInElement(price2, 0.5, 0.5);
  }, []);

  useEffect(() => {
    if (isYearly) {
      setStandardPrice("2.99");
      setPremiumPrice("15.99");
    } else {
      setStandardPrice("3.99");
      setPremiumPrice("17.99");
    }
  }, [isYearly]);

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
      <SwitchButton isYearly={isYearly} setYearly={setYearly} />
      <div className='w-full md:w-7/12 h-auto flex flex-col md:flex-row gap-12 mt-10'>
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={language === 'it' ? standardPlanIt : standardPlanEn} reference={priceCardRef1} subscriptionPrice={standardPrice} isYearly={isYearly} percentSaved="25" />
        <PriceCard setModalWaitListOpen={setModalWaitListOpen} planDetails={language === 'it' ? premiumPlanIt : premiumPlanEn} reference={priceCardRef2} subscriptionPrice={premiumPrice} isYearly={isYearly} percentSaved="11" />
      </div>
    </ContainerComponents>
  );
}
