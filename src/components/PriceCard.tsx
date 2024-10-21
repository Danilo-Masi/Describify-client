// Components
import Divider from './Divider';
import { CheckIcon } from './SvgComponents'
import ActiveButton from './ActiveButton'

export default function PriceCard({ priceValue }: { priceValue: number | number[] }) {

    // Funzione per mostrare il valore del prezzo corrispondente ai token selezionati
    const calculatePrice = () => {
        if (priceValue === 25) {
            return 1.25;
        } else if (priceValue === 50) {
            return 2.50;
        } else if (priceValue === 100) {
            return 5.00;
        } else if (priceValue === 200) {
            return 8.00;
        } else if (priceValue === 350) {
            return 14.00;
        }
        return "N/A";
    }

    return (
        <div className='w-full md:w-1/3 flex flex-col items-center gap-y-6 py-8 px-5 rounded-xl border border-custom-borderColor dark:border-dark-borderColor bg-custom-elevation2 dark:bg-dark-elevation2'>
            <h1 className='font-semibold text-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>Pay as you go</h1>
            <p className='font-bold text-5xl text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>{calculatePrice()}€
                <span className='font-medium text-lg text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>/one time</span>
            </p>
            <Divider />
            <ul className='w-full flex flex-col gap-y-3 text-md text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'>
                <li className='flex items-center gap-x-1'><CheckIcon />opzione 1</li>
                <li className='flex items-center gap-x-1'><CheckIcon />opzione 2</li>
                <li className='flex items-center gap-x-1'><CheckIcon />opzione 3</li>
                <li className='flex items-center gap-x-1'><CheckIcon />opzione 4</li>
                <li className='flex items-center gap-x-1'><CheckIcon />opzione 5</li>
            </ul>
            <ActiveButton text='Ottieni token' buttonStyle='w-full' onClick={() => console.log('DA IMPLEMENTARE')} />
        </div>
    )
}
