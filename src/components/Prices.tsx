// React
import { useEffect, useRef } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
// Components
import GridBackground from './GridBackground';
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione"
import PriceCard from './PriceCard';

export default function Prices({ id }: { id: string; }) {

  // Componente per la traduzione
  const { t } = useTranslation();

  const priceCard1 = useRef(null);
  const priceCard2 = useRef(null);
  const priceCard3 = useRef(null);

  useEffect(() => {
    // Reference delle animazioni
    const price1 = priceCard1.current || "";
    const price2 = priceCard2.current || "";
    const price3 = priceCard3.current || "";
    // Avvio delle animazioni
    fadeInElement(price1, 0.5, 0.5);
    fadeInElement(price2, 0.5, 0.0);
    fadeInElement(price3, 0.5, 1.0);
  }, [window.onload]);

  return (
    <GridBackground id={id}>
      <ContainerComponents id={id}>
        {/* Intestazione */}
        <Intestazione
          badgeValue={t('prezziBadge').toUpperCase()}
          titleValue={t('prezziTitolo')}
          descriptionValue={t('prezziDescrizione')}
          titleStyle="text-5xl md:text-6xl"
          descriptionStyle="text-lg" />
        {/* Price cards */}
        <div className='w-full md:w-[85%] flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-5'>
          {/* Piano basic */}
          <PriceCard
            reference={priceCard1}
            mdGrandezza='md:w-[calc(32%-0.85rem)]'
            cardTokenNum='25'
            cardPrice='4.50'
            cardPriceAfter='3.00'
            cardTitle={t('prezziPianoBasicTitolo')}
            cardDescription={t('prezziPianoBasicDescrizione')}
            cardButtonText={t('prezziPianoBasicBottone')} />
          {/* Piano standard */}
          <PriceCard
            reference={priceCard2}
            mdGrandezza='md:w-[calc(36%-0.80rem)]'
            cardBadge={true}
            cardTokenNum='50'
            cardPrice='8.00'
            cardPriceAfter='5.00'
            cardTitle={t('prezziPianoStandardTitolo')}
            cardDescription={t('prezziPianoStandardDescrizione')}
            cardButtonText={t('prezziPianoStandardBottone')} />
          {/* Piano premium */}
          <PriceCard
            reference={priceCard3}
            mdGrandezza='md:w-[calc(32%-0.85rem)]'
            cardTokenNum='150'
            cardPrice='21.00'
            cardPriceAfter='12.00'
            cardTitle={t('prezziPianoPremiumTitolo')}
            cardDescription={t('prezziPianoPremiumDescrizione')}
            cardButtonText={t('prezziPianoPremiumBottone')} />
        </div>
      </ContainerComponents>
    </GridBackground>
  );
}
