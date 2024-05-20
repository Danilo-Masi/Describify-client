import { Dispatch, SetStateAction, useState } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Data
import { featuresDetailsIt1, featuresDetailsIt2, featuresDetailsIt3, featuresDetailsIt4 } from '../data/features_details_it';
import { featuresDetailsEn1, featuresDetailsEn2, featuresDetailsEn3, featuresDetailsEn4 } from '../data/features_details_en';
//Utilities
import { useLanguage } from '../utilities/useLanguage';
//Components
import { ContainerComponents } from "./Layout";
import Intestazione from "./Intestazione";
import FeaturesStep from "./FeaturesStep";
import ProductForm from './ProductForm';
import ProductTitle from './ProductTitle';
import ProductCaption from './ProductCaption';
import CardPrototype from './CardPrototype';

interface FeaturesProps {
  id: string;
  accessToken: boolean;
  setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Features({ id, accessToken, setModalWaitListOpen }: FeaturesProps) {

  const { t } = useTranslation();
  const language = useLanguage();

  const titolo = "T-Shirt Vans Nera - Uomo Taglia M - Ottime condizioni";
  const descrizione = `Ciao! Sto vendendo la mia t-shirt Vans di colore nero, taglia M. L'ho comprata un po' di tempo fa, ma l'ho usata solo un paio di volte e ora non mi sta più come vorrei. È davvero in ottime condizioni, come nuova! 

Dettagli del prodotto:  
- Brand: Vans
- Colore: Nero
- Taglia: M
- Condizione: Usata ma tenuta benissimo
  
Questa maglietta è in cotone 100%, quindi è super comoda e perfetta per l'estate, ma anche perfetta da mettere sotto una felpa o una giacca nei mesi più freddi. Ha il logo Vans sul petto, non troppo grande, giusto quel tocco in più che non guasta mai.

L'ho sempre lavata con cura e conservata piegata nell'armadio, quindi non ha strappi, macchie o segni di usura. Sinceramente mi dispiace venderla perché è una gran bella maglietta, ma preferisco che qualcuno la possa indossare piuttosto che tenerla inutilizzata.

Fammi sapere se sei interessato o se hai altre domande!`;

  return (
    <ContainerComponents id={id}>
      <Intestazione
        badgeValue={t('featuresBadge').toUpperCase()}
        titleValue={t('featuresTitle')}
        descriptionValue={t('featuresDescription')}
        accessToken={accessToken}
        titleStyle="text-5xl md:text-6xl"
        descriptionStyle="text-lg" />
      <div className="flex flex-col items-center gap-y-20 md:gap-y-32 mt-10">
        <FeaturesStep data={language === 'it' ? featuresDetailsIt1 : featuresDetailsEn1} justifyPosition='justify-start' component={<ProductForm handleGeneration={() => setModalWaitListOpen(true)} />} arrow={true} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt2 : featuresDetailsEn2} justifyPosition='justify-center' component={<ProductCaption descriptionGenerated={descrizione} />} order1="md:order-2" order2="md:order-1" />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt3 : featuresDetailsEn3} justifyPosition='justify-center' component={<ProductTitle titleGenerated={titolo} />} />
        <FeaturesStep data={language === 'it' ? featuresDetailsIt4 : featuresDetailsEn4} justifyPosition='justify-start' component={<CardPrototype setModalWaitListOpen={setModalWaitListOpen} />} sparkling={true} order1="md:order-2" order2="md:order-1" />
      </div>
    </ContainerComponents>
  );
}
