// React
import { useState } from "react";
// Rc-slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function PriceRangeSlider({ reference }: { reference: any }) {
    // Stato del valore attuale
    const [value, setValue] = useState<number | number[]>(25);
    // Valori degli step
    const marks = {
        25: '25',
        50: '50',
        100: '100',
        200: '200',
        350: '350'
    };

    // Funzione per mostrare il valore del prezzo corrispondente ai token selezionati
    const calculatePrice = () => {
        if (value === 25) {
            return 1.25;
        } else if (value === 50) {
            return 2.50;
        } else if (value === 100) {
            return 5.00;
        } else if (value === 200) {
            return 8.00;
        } else if (value === 350) {
            return 14.00;
        }
        return "N/A";
    }

    return (
        <div
            ref={reference}
            className="w-full md:w-1/2 flex flex-col gap-y-3 p-6 rounded-3xl border border-custom-borderColor dark:border-dark-borderColor bg-custom-elevation2 dark:bg-dark-elevation2">
            <h1 className="text-xl font-semibold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                Minimum trading volume
            </h1>
            <p className="text-sm text-custom-textSecondaryGray dark:text-dark-textSecondaryGray mb-6">
                Select your minimum trading value to find opportunities that match your investment goals.
            </p>
            {/* Slider */}
            <Slider
                min={25}
                max={350}
                step={null}
                marks={marks}
                defaultValue={10}
                onChange={(val) => setValue(val)}
                // Stile del dot selezionato
                handleStyle={{
                    borderColor: '#8E64FF',
                    height: '24px',
                    width: '24px',
                    marginTop: '-9px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                }}
                // Stile della barra di sfondo selezionata
                trackStyle={{
                    backgroundColor: '#8E64FF',
                    height: '10px',
                }}
                // Stile della barra di sfondo non selezionata
                railStyle={{
                    backgroundColor: '#5A5C74',
                    height: '10px'  // Aumenta l'altezza del rail
                }}
                // Stile per i dots non selezionati
                dotStyle={{
                    borderColor: '#8E64FF',
                    height: '18px',  // Dimensioni della dot
                    width: '18px',
                    backgroundColor: '#ffffff',  // Colore dello sfondo della dot
                    marginBottom: '-7px',  // Allinea verticalmente le dots al centro della traccia
                    borderWidth: '2px',  // Bordo per renderle più evidenti
                }}
            />
            {/* Visualizzazione del valore corrente */}
            <div className="mt-10 text-center">
                <span className="text-lg font-bold text-white">{value} crediti selezionati = {calculatePrice()} €</span>
            </div>
        </div>
    );
}