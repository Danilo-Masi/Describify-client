// React
import { useEffect, useRef } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione"
import PriceCard from './PriceCard';

export default function Prices({ id }: { id: string; }) {

  // Componente per la traduzione
  const { t } = useTranslation();

  //Inizializzazione delle reference per le animazioni
  const priceCard1 = useRef(null);
  const priceCard2 = useRef(null);
  const priceCard3 = useRef(null);

  useEffect(() => {
    // Assegnazione delle reference per le animazioni
    const price1 = priceCard1.current || "";
    const price2 = priceCard2.current || "";
    const price3 = priceCard3.current || "";
    // Impostazioni delle animazioni (reference, durata, inizio)
    fadeInElement(price1, 0.5, 0.5);
    fadeInElement(price2, 0.5, 0.0);
    fadeInElement(price3, 0.5, 1.0);
  }, [window.onload]);

  return (
    <ContainerComponents id={id}>
      {/* Intestazione */}
      <Intestazione
        badgeValue={t('prezziBadge').toUpperCase()}
        titleValue={t('prezziTitolo')}
        descriptionValue={t('prezziDescrizione')}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      {/* Price cards */}
      <div className='w-full md:w-[85%] flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-12 md:gap-8 mt-20'>
        {/* Piano basic */}
        <PriceCard
          reference={priceCard1}
          mdGrandezza='md:w-[calc(32%-1.6rem)]'
          cardTokenNum='25'
          cardPrice='4.50'
          cardPriceAfter='3.00'
          cardTitle={t('prezziPianoBasicTitolo')}
          cardDescription={t('prezziPianoBasicDescrizione')}
          cardButtonText={t('prezziPianoBasicBottone')} />
        {/* Piano standard */}
        <PriceCard
          reference={priceCard2}
          mdGrandezza='md:w-[calc(36%-0.8rem)]'
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
          mdGrandezza='md:w-[calc(32%-1.6rem)]'
          cardTokenNum='150'
          cardPrice='21.00'
          cardPriceAfter='12.00'
          cardTitle={t('prezziPianoPremiumTitolo')}
          cardDescription={t('prezziPianoPremiumDescrizione')}
          cardButtonText={t('prezziPianoPremiumBottone')} />
      </div>
    </ContainerComponents>
  );
}
