// React-icons
import { IoMdTrendingUp } from "react-icons/io";
// Flowbite-react
import { Button, Tooltip, Badge } from "flowbite-react";
// I18Next
import { useTranslation } from 'react-i18next';

interface PriceCardProps {
    reference: any;
    mdGrandezza: string;
    cardTitle: string;
    cardBadge?: boolean;
    cardTokenNum: string;
    cardPrice: string;
    cardPriceAfter: string;
    cardDescription: string;
    cardButtonText: string;
}

export default function PriceCard({ reference, mdGrandezza, cardTitle, cardBadge, cardTokenNum, cardPrice, cardPriceAfter, cardDescription, cardButtonText }: PriceCardProps) {

    // Componente per la traduzione
    const { t } = useTranslation();

    return (
        <div
            ref={reference}
            className={`w-full ${mdGrandezza} flex flex-col items-center justify-start gap-y-6 py-8 px-5 rounded-xl shadow-lg border border-custom-borderColor dark:border-dark-borderColor bg-custom-elevation2 dark:bg-dark-elevation2 hover:shadow-2xl transition-shadow duration-300`}>
            {/* Titolo, Descrizione ed eventuale Badge */}
            <div className='w-full flex flex-col items-start justify-between gap-y-5 md:gap-y-3'>
                <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3">
                    <h1 className="text-xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                        {cardTitle}
                    </h1>
                    {cardBadge && (
                        <Badge className="px-3 py-1 text-sm" color="green" icon={IoMdTrendingUp}>
                            {t('prezziPianoStandardBadge')}
                        </Badge>
                    )}
                </div>
                <Badge color="indigo" className="text-base">
                    {cardTokenNum} token
                </Badge>
                <p className='text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                    {cardDescription}
                </p>
            </div>
            {/* Prezzi */}
            <div className='w-full flex items-center justify-center gap-x-3'>
                <p className='font-bold text-xl text-custom-textSecondaryGray dark:text-dark-textSecondaryGray line-through'>
                    €{cardPrice}
                </p>
                <p className='font-bold text-2xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>
                    €{cardPriceAfter}
                </p>
            </div>
            {/* Pulsante Acquista */}
            <Tooltip
                content={t('prezziBottoneTooltip')}
                animation="duration-500"
                trigger="hover">
                <Button
                    disabled
                    className="w-full text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                    {cardButtonText}
                </Button>
            </Tooltip>
        </div>
    );
}