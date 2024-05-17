import { Dispatch, SetStateAction } from 'react';
//Images
import maglia from '../assets/images/maglia.webp';
//Components
import ActiveButton from './ActiveButton';

interface CardPrototypeProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CardPrototype({ setModalWaitListOpen }: CardPrototypeProps) {
    return (
        <div className="w-full md:w-5/6 h-auto flex flex-col items-start justify-start gap-y-3 rounded-xl md:-rotate-12 py-7 px-5 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <div className='w-full h-[30svh] overflow-hidden rounded-lg' >
                <img src={maglia} alt="Ragazzo che indossa maglia nera della Vans" className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex items-center gap-x-3'>
                <p className='font-bold text-xl text-custom-textSecondaryGray dark:text-dark-textSecondaryGray line-through'>30,00 €</p>
                <p className='font-bold text-3xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>28,50 €</p>
            </div>
            <p className='font-medium text-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>T-Shirt Vans Nera – Uomo Taglia M – Ottime condizioni</p>
            <p className='font-light text-md text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>Ciao! Sto vendendo la mia t-shirt Vans di colore nero, taglia M. L'ho comprata un po' di tempo fa,...</p>
            <ActiveButton text='Aggiungi annuncio' buttonStyle='w-full' onClick={() => setModalWaitListOpen(true)} />
        </div>
    );
}
