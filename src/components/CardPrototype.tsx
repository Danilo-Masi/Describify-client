// I18next
import { useTranslation } from 'react-i18next';
// Images
import maglia from '../assets/images/maglia.webp';

export default function CardPrototype() {

    const { t } = useTranslation();

    return (
        <div className="w-full md:w-5/6 h-auto flex flex-col items-start justify-start gap-y-3 rounded-xl md:-rotate-12 py-7 px-5 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <div className='w-full h-[30svh] overflow-hidden rounded-lg' >
                <img src={maglia} alt="Ragazzo che indossa maglia nera della Vans" className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex items-center gap-x-3'>
                <p className='font-bold text-xl text-custom-textSecondaryGray dark:text-dark-textSecondaryGray line-through'>30,00 €</p>
                <p className='font-bold text-3xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>28,50 €</p>
            </div>
            <p className='font-medium text-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>{t('cardTitle')}</p>
            <p className='font-light text-md text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>{t('cardCaption')}</p>
            <button
                name="button"
                type="button"
                disabled
                className="w-full rounded-lg px-5 py-2.5 text-sm font-semibold text-dark-textPrimaryGray bg-green-500 hover:bg-green-700" >
                {t('cardButton').toUpperCase()}
            </button>
        </div>
    );
}
