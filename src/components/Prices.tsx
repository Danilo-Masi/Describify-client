// React
import { useEffect, useRef } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
import { useLanguage } from '../utilities/useLanguage';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione"
import PriceRangeSlider from './PriceRangeSlider';

export default function Prices({ id }: { id: string; }) {

  const { t } = useTranslation();
  const language = useLanguage();

  const priceCard = useRef(null);

  useEffect(() => {
    // Reference delle animazioni
    const price1 = priceCard.current || "";
    // Avvio delle animazioni
    fadeInElement(price1, 0.5, 0.0);
  }, [window.onload]);


  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue={t('pricesBadge').toUpperCase()}
        titleValue={t('pricesTitle')}
        descriptionValue={t('pricesDescription')}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      {/* Price slider */}
      <PriceRangeSlider reference={priceCard} />
    </ContainerComponents>
  );
}
