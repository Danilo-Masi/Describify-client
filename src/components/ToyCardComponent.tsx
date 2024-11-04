// I18next
import { useTranslation } from 'react-i18next';
// Assets/Images
import tutaSpaziale from '../assets/images/tuta_spaziale.webp';

export default function ToyCardComponent() {

    // Componente per la traduzione
    const { t } = useTranslation();

    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-y-3 rounded-xl md:-rotate-12 py-7 px-5 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <div className='w-full h-[30svh] overflow-hidden rounded-lg' >
                <img
                    src={tutaSpaziale}
                    alt="Tuta spaziale Prada"
                    className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex items-center gap-x-3'>
                <p className='font-bold text-xl text-custom-textSecondaryGray dark:text-dark-textSecondaryGray line-through'>
                    €300,00
                </p>
                <p className='font-bold text-3xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>
                    €280,50
                </p>
            </div>
            <p className='font-medium text-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>
                🚀 {t('componenteVenditaTitolo')}
            </p>
            <p className='font-light text-md text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                {t('componenteVenditaDescrizione')}
            </p>
            <button
                disabled
                type="button"
                className="w-full rounded-lg px-5 py-3 text-sm font-semibold text-dark-textPrimaryGray bg-green-500 hover:bg-green-800" >
                {t('componenteVenditaBottone').toUpperCase()}
            </button>
        </div>
    );
}
