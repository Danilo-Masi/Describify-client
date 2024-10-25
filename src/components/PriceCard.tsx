// React-icons
import { IoMdTrendingUp } from "react-icons/io";
// Flowbite-react
import { Badge } from "flowbite-react";
// Components
import ActiveButton from './ActiveButton';

interface PriceCardProps {
    mdGrandezza: string;
    cardTitle: string;
    cardBadge?: boolean;
    cardTokenNum: string;
    cardPrice: string;
    cardPriceAfter: string;
    cardDescription: string;
    cardButtonText: string;
}

export default function PriceCard({ mdGrandezza, cardTitle, cardBadge, cardTokenNum, cardPrice, cardPriceAfter, cardDescription, cardButtonText }: PriceCardProps) {
    return (
        <div className={`w-full ${mdGrandezza} flex flex-col items-start justify-start gap-y-6 py-8 px-5 rounded-xl shadow-lg border border-custom-borderColor dark:border-dark-borderColor bg-custom-elevation2 dark:bg-dark-elevation2 hover:shadow-2xl transition-shadow duration-300`}>

            {/* Titolo e Badge */}
            <div className='w-full flex flex-wrap items-center justify-between gap-y-2'>
                <h1 className={`${cardBadge ? 'w-fit' : 'w-full'} text-xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray`}>
                    {cardTitle}
                </h1>
                {cardBadge && (
                    <Badge className="px-3 py-1 text-sm" color="green" icon={IoMdTrendingUp}>
                        most popular
                    </Badge>
                )}
            </div>

            {/* Numero di token e descrizione */}
            <p className='text-xl font-semibold text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>{cardTokenNum} token</p>
            <p className='text-clip text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>{cardDescription}</p>

            {/* Prezzi */}
            <div className='w-full flex items-center gap-x-3'>
                <p className='font-bold text-xl text-custom-textSecondaryGray dark:text-dark-textSecondaryGray line-through'>
                    €{cardPrice}
                </p>
                <p className='font-bold text-2xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>
                    €{cardPriceAfter}
                </p>
            </div>

            {/* Pulsante Attivo */}
            <ActiveButton
                text={cardButtonText}
                buttonStyle='w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300'
                onClick={() => alert('Acquista 25 token')}
            />
        </div>
    );
}