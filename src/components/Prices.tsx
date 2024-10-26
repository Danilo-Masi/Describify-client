// React
import { useEffect, useRef, useState } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { fadeInElement } from '../utilities/useAnimations';
import { useLanguage } from '../utilities/useLanguage';
// Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione"
import PriceCard from './PriceCard';
import GridBackground from './GridBackground';

export default function Prices({ id }: { id: string; }) {

  const { t } = useTranslation();
  const language = useLanguage();


  //const priceCard = useRef(null);

  /*useEffect(() => {
    // Reference delle animazioni
    const price1 = priceCard.current || "";
    // Avvio delle animazioni
    fadeInElement(price1, 0.5, 0.0);
  }, [window.onload]);*/


  return (
    <GridBackground id={id}>
      <ContainerComponents id={id}>
        {/* Intestazione */}
        <Intestazione
          badgeValue={t('pricesBadge').toUpperCase()}
          titleValue={t('pricesTitle')}
          descriptionValue={t('pricesDescription')}
          titleStyle="text-5xl md:text-6xl"
          descriptionStyle="text-lg" />
        {/* Price card */}
        <div className='w-full md:w-[85%] flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-5'>
          <PriceCard mdGrandezza='md:w-[calc(32%-0.85rem)]' cardTitle='Basic plan' cardTokenNum='25' cardDescription='Perfetto per chi vuole iniziare a esplorare la piattaforma senza impegno' cardPrice='4.50' cardPriceAfter='3.00' cardButtonText='Acquista 25 token' />
          <PriceCard mdGrandezza='md:w-[calc(36%-0.80rem)]' cardTitle='Standard plan' cardBadge={true} cardTokenNum='50' cardDescription='Ideale per chi vuole vendere regolarmente e massimizzare i guadagni' cardPrice='8.00' cardPriceAfter='5.00' cardButtonText='Acquista 50 token' />
          <PriceCard mdGrandezza='md:w-[calc(32%-0.85rem)]' cardTitle='Premium plan' cardTokenNum='150' cardDescription='Il piano perfetto per venditori professionali che vogliono crescere rapidamente' cardPrice='21.00' cardPriceAfter='12.00' cardButtonText='Acquista 150 token' />
        </div>
      </ContainerComponents>
    </GridBackground>
  );
}
